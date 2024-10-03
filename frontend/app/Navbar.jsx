"use client";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FilterData } from '@/lib/filterData';
import Logo from '@/components/Logo';
import NavigationItemsFirst from '@/components/NavigationItemsFirst'
import NavigationItemsSecond from '@/components/NavigationItemsSecond'
import UserAction from '@/components/UserAction'
import IconNavigation from '@/components/IconNavigation'
import SearchSection from '@/components/SearchSection'

const Navbar = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mode, setMode] = useState(true);
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const filterItems = [
    { label: 'Where', placeholder: 'Search destinations', width: '35%', isModal: true, modalHandler: 'openWhereModal' },
    { label: 'Check in', placeholder: 'Add dates', width: '15%', isHidden: true },
    { label: 'Check out', placeholder: 'Add dates', width: '15%', isHidden: true },
    { label: 'Who', placeholder: 'Add guests', width: '30%', isSearchButton: true }
  ];

  const dynamicFilterItems = mode
    ? filterItems : [
      { label: 'Where', placeholder: 'Search destinations', width: '35%', isModal: true, modalHandler: 'openWhereModal' },
      { label: 'Date', placeholder: 'Add dates', width: '30%', isHidden: false },
      { label: 'Who', placeholder: 'Add guests', width: '35%', isSearchButton: true }
    ];

  // Function to open WhereModal
  const openWhereModal = () => {
    setIsWhereModalOpen(true);
  };

  // Function to close WhereModal
  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll amount as needed
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Check if the first item is visible
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
    setMode(!mode)
  }

  return (
    <>
      {/* 1st section */}
      <nav className="w-screen h-20 md:h-48 lg:h-44 bg-white md:shadow-sm fixed z-50">
        <div className="md:flex justify-between pt-5 lg:px-10 hidden">
          <Logo />
          {/* Navigation items */}
          {
            !isScrolled ?
              <NavigationItemsFirst mode={mode} handleMode={handleMode} />
              : <NavigationItemsSecond />
          }
          <UserAction />
        </div>

        {/* Search Section */}
        {
          !isScrolled &&
          <div className={cn(
            "mt-3 lg:mt-4 flex items-center justify-center",
            isScrolled ? 'md:mt-0' : 'md:mt-10'
          )}>
            <SearchSection
              dynamicFilterItems={dynamicFilterItems} 
              openWhereModal={openWhereModal} 
              hoveredIndex ={hoveredIndex } 
              setHoveredIndex ={setHoveredIndex } 
            />
          </div>
        }

        {/* 2nd section  isLeftArrowVisible,scrollRef,FilterData*/}
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
