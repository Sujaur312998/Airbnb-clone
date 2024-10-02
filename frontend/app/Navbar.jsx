"use client";
import React, { useState, useRef, useEffect } from 'react';
import Airbub_svg from '@/app/svg/Airbub_svg';
import Airbub_logo_svg from '@/app/svg/Airbub_logo_svg';
import Account_svg from '@/app/svg/account_svg';
import { TfiWorld } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { cn } from '@/lib/utils';
import { FilterData } from '@/lib/filterData';
import Left_arrow_svg from '@/app/svg/Left_arrow_svg';
import Right_arrow_svg from '@/app/svg/Right_arrow_svg';

const Navbar = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mode, setMode] = useState(true);
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);

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
    const refCurrent = scrollRef.current;
    refCurrent.addEventListener('scroll', checkScrollPosition);

    return () => {
      refCurrent.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      {/* 1st section */}
      <nav className="w-screen h-20 md:h-52 lg:h-48 bg-white md:shadow-sm">
        <div className="md:flex justify-between pt-5 lg:px-10 hidden">
          <div className='pl-6'>
            {/* Responsive logo */}
            <span className="block lg:hidden">
              <Airbub_logo_svg />
            </span>
            <span className="hidden lg:block">
              <Airbub_svg />
            </span>
          </div>

          {/* Navigation items */}
          <div className="md:flex lg:flex lg:relative lg:top-0 lg:w-auto lg:items-center lg:justify-start md:absolute w-full md:top-16 md:items-center md:justify-center overflow-hidden">
            <ul className="flex gap-2 text-lg text-center items-center flex-shrink-0 whitespace-nowrap max-w-full">
              <li
                onClick={() => setMode(true)}
                className={cn(
                  'relative font-semibold px-4 py-1 flex items-center justify-center cursor-pointer hover:rounded-full',
                  mode ? 'text-black' : 'text-gray-400 hover:bg-gray-100'
                )}
              >
                Stays
              </li>

              <li
                onClick={() => setMode(false)}
                className={cn(
                  'relative font-semibold px-4 py-1 flex items-center justify-center cursor-pointer hover:rounded-full',
                  !mode ? 'text-black' : 'text-gray-400 hover:bg-gray-100'
                )}
              >
                Experiences
              </li>
            </ul>
          </div>


          <ul className="flex gap-4 items-center pr-6">
            <li className="flex items-center">Airbub your home</li>
            <li className="flex items-center">
              <TfiWorld aria-label="World Icon" />
            </li>
            <li className="py-2 px-3 border rounded-full">
              <button className="flex items-center gap-2" aria-label="Account Menu">
                <IoMdMenu className="text-2xl" />
                <Account_svg className="text-gray-500" />
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-4 md:mt-12 lg:mt-6 flex items-center justify-center ">
          <div className="w-[95%] lg:w-[60%] flex items-center justify-center rounded-full border-2 shadow-md ">
            <div className="flex items-center w-full">
              {dynamicFilterItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={cn(
                      `relative cursor-pointer px-4 py-2 flex-grow flex justify-between hover:bg-slate-100 rounded-full transition-colors duration-300 group w-[${item.width}]`,
                      item.isHidden ? 'hidden lg:flex' : 'flex',
                      index === dynamicFilterItems.length - 1 ? 'hidden lg:flex' : '' // Hide last item on small screens
                    )}
                  >
                    <div className={cn(index === 0 ? 'lg:pl-6' : '')}>
                      <div className="px-1 flex">
                        {/* Search button visible on small screens */}
                        {
                          index === 0 && (
                            <button className="flex items-center justify-center w-12 h-12 rounded-full font-bold lg:hidden">
                              <CiSearch size={24} />
                            </button>
                          )
                        }

                        <div>
                          {/* Change label and placeholder for smaller devices */}
                          <label className=" text-gray-700 font-medium mb-1 lg:mb-0">
                            {
                              index === 0 ? (
                                <>
                                  <span className="lg:hidden">Where to</span>{' '}
                                  {/* For small screens */}
                                  <span className="hidden lg:inline">{item.label}</span>{' '}
                                  {/* For large screens */}
                                </>
                              ) : (
                                <span className="hidden lg:inline">{item.label}</span>
                              )
                            }
                          </label>
                          <div
                            className="w-full rounded-full"
                            onClick={item.isModal ? openWhereModal : undefined}
                          >
                            <p className="text-gray-400">
                              {index === 0 ? (
                                <>
                                  <span className="lg:hidden">
                                    Anywhere ● Any week ● Add guest
                                  </span>{' '}
                                  {/* For small screens */}
                                  <span className="hidden lg:inline">
                                    {item.placeholder}
                                  </span>{' '}
                                  {/* For large screens */}
                                </>
                              ) : (
                                <span className="hidden lg:inline">
                                  {item.placeholder}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {item.isSearchButton && (
                      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF385C] text-white font-bold group-hover:bg-rose-700 transition-colors duration-300">
                        <CiSearch size={24} />
                      </button>
                    )}
                  </div>

                  {index !== dynamicFilterItems.length - 1 && (
                    hoveredIndex !== index && hoveredIndex - 1 !== index && (
                      <div className="hidden lg:inline-block border-l border-gray-400 h-10"></div>
                    )
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>



      {/* 2nd Section */}

      <nav className="w-screen h-28 flex items-center justify-between px-2 md:px-10 overflow-hidden relative">
        {/* Left Arrow Button (hidden on small screens) */}
        {isLeftArrowVisible && (
          <button
            className="md:flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer flex-shrink-0 hidden lg:flex"
            onClick={() => handleScroll('left')}
          >
            <Left_arrow_svg />
          </button>
        )}

        {/* Mid section (scrollable on small screens, without scrollbar) */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center justify-start overflow-x-auto whitespace-nowrap px-4 scrollbar-hide md:overflow-x-hidden"
        >
          {FilterData?.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 opacity-60 hover:opacity-100 cursor-pointer relative">
              <img
                className="w-7"
                src={item.src}
                alt={item.title}
              />
              <p className="text-center py-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow Button (hidden on small screens) */}
        <button
          className="md:flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer flex-shrink-0 hidden lg:flex"
          onClick={() => handleScroll('right')}
        >
          <Right_arrow_svg />
        </button>
      </nav>

    </>
  );
};

export default Navbar;
