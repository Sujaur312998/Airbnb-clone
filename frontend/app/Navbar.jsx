"use client";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FilterData } from '@/lib/filterData';
import Logo from '@/components/Logo';
import NavigationItemsFirst from '@/components/NavigationItemsFirst';
import NavigationItemsSecond from '@/components/NavigationItemsSecond';
import UserAction from '@/components/UserAction';
import IconNavigation from '@/components/IconNavigation';
import SearchSection from '@/components/SearchSection';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { region } from '@/lib/filterData'

const Navbar = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverandClickindex, setHoverandCkickedIndex] = useState(null);

  const [mode, setMode] = useState(true);
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  // Date Picker
  const [startDate, setStartDate] = useState(null); // State to hold start date
  const [endDate, setEndDate] = useState(null); // State to hold end date
  const [focusedInput, setFocusedInput] = useState('startDate');

  const isCurrentOrFutureMonth = (currentMonth) => {
    return moment().isSameOrBefore(currentMonth, 'month');
  };

  const filterItems = [
    { label: 'Where', placeholder: 'Search destinations', width: '35%', isModal: true, modalHandler: 'openWhereModal' },
    { label: 'Check in', placeholder: 'Add dates', width: '15%', isModal: true, isHidden: true },
    { label: 'Check out', placeholder: 'Add dates', width: '15%', isModal: true, isHidden: true },
    { label: 'Who', placeholder: 'Add guests', width: '30%', isModal: true, isSearchButton: true }
  ];

  const dynamicFilterItems = mode
    ? filterItems : [
      { label: 'Where', placeholder: 'Search destinations', width: '35%', isModal: true, modalHandler: 'openWhereModal' },
      { label: 'Date', placeholder: 'Add dates', width: '30%', isModal: true, isHidden: false },
      { label: 'Who', placeholder: 'Add guests', width: '35%', isModal: true, isSearchButton: true }
    ];

  const openWhereModal = () => {
    setIsWhereModalOpen(true);
  };

  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setIsLeftArrowVisible(scrollLeft > 0); // Show the left arrow only if scrolled right
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const refCurrent = scrollRef.current;
    refCurrent.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      refCurrent.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const handleMode = () => {
    setMode(!mode);
  };

  const handleSearchSection = () => {

    return (
      <div className="relative bg-white shadow dark:bg-gray-700 rounded-2xl ">

        <div className="flex items-center justify-between pt-4 rounded-t dark:border-gray-600 px-8 ">
          <h3 className={
            cn(
              "text-md font-semibold text-gray-800 dark:text-white flex items-center  w-full",
              hoverandClickindex === 0 ? "justify-between" : "justify-center"
            )
          }>
            {
              hoverandClickindex == 0 ?
                <div className="flex gap-3 p-1 ">
                  Search by region
                </div> :
                hoverandClickindex == 3 ? <></> :
                  <div className="flex gap-3 p-1 rounded-full bg-stone-100">
                    <button className="px-8 py-1 bg-white rounded-full">Date</button>
                    <button className="px-8 py-1 hover:bg-white rounded-full">Month</button>
                    <button className="px-8 py-1 hover:bg-white rounded-full">Year</button>
                  </div>
            }
          </h3>
          <button onClick={closeWhereModal} className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        <div className="p-4 md:p-5  overflow-y-auto max-h-96">
          {
            hoverandClickindex == 0 ?
              <div className="grid grid-cols-3 ">
                {region?.map((item, index) => (
                  <div key={index} className="flex flex-col items-center group transition duration-300">
                    <div className="w-[80%] h-auto rounded-xl overflow-hidden border border-transparent group-hover:border-rose-600"> 
                      <img src={item.src} alt={item.title} className="w-full h-auto" />
                    </div>
                    <p className="text-center mt-2">{item.title}</p>
                  </div>
                ))}
              </div>
              :
              hoverandClickindex == 3 ? <></> :
                <DayPickerRangeController
                  startDate={startDate}
                  endDate={endDate}
                  onDatesChange={({ startDate, endDate }) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                  }}
                  onFocusChange={focusedInput => {
                    if (!focusedInput) {
                      setFocusedInput('startDate'); // If no focus, return to startDate focus
                    } else {
                      setFocusedInput(focusedInput);
                    }
                  }}
                  focusedInput={focusedInput}
                  noBorder
                  hideKeyboardShortcutsPanel
                  numberOfMonths={2}
                  orientation="horizontal"
                  initialVisibleMonth={() => moment()}
                  navPrev={isCurrentOrFutureMonth(moment()) ? null : <div className="DayPickerNavigation_buttonPrev">‹</div>}
                  isOutsideRange={day => moment().diff(day) > 0}
                />
          }

        </div>
      </div>
    )
  }


  return (
    <>
      <nav className="w-screen h-20 md:h-48 lg:h-44 bg-white md:shadow-sm fixed z-50">
        <div className="md:flex justify-between pt-5 lg:px-10 hidden">
          <Logo />
          {
            !isScrolled ? (
              <NavigationItemsFirst mode={mode} handleMode={handleMode} />
            ) : (
              <NavigationItemsSecond />
            )
          }
          <UserAction />
        </div>

        {/* Search Section */}
        <div className={cn(
          "mt-3 lg:mt-4 flex items-center justify-center relative", // Changed to relative for positioning
          isScrolled ? 'md:mt-0' : 'md:mt-10'
        )}>
          <SearchSection
            dynamicFilterItems={dynamicFilterItems}
            openWhereModal={openWhereModal}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            setHoverandCkickedIndex={setHoverandCkickedIndex}
          />

          {/* Modal positioned below SearchSection */}
          {
            isWhereModalOpen && (
              <div className="absolute left-1/2 top-16 transform -translate-x-1/2 mt-2 w-full max-w-2xl z-50 rounded-2xl">
                {handleSearchSection()}
              </div>
            )
          }
        </div>

        {/* 2nd section  isLeftArrowVisible,scrollRef,FilterData */}
        <IconNavigation
          isLeftArrowVisible={isLeftArrowVisible}
          scrollRef={scrollRef}
          FilterData={FilterData}
          handleScroll={handleScroll}
        />
      </nav>
    </>
  );
};

export default Navbar;
