"use client";
import React, { useState } from 'react';
import Airbub_svg from '@/app/svg/Airbub_svg';
import Airbub_logo_svg from '@/app/svg/Airbub_logo_svg';
import Account_svg from '@/app/svg/account_svg';
import { TfiWorld } from "react-icons/tfi";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';

const filterItems = [
  { label: 'Where', placeholder: 'Search destinations', width: '35%', isModal: true, modalHandler: 'openWhereModal' },
  { label: 'Check in', placeholder: 'Add dates', width: '15%', isHidden: true },
  { label: 'Check out', placeholder: 'Add dates', width: '15%', isHidden: true },
  { label: 'Who', placeholder: 'Add guests', width: '35%', isSearchButton: true }
];

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isWhereModalOpen, setIsWhereModalOpen] = useState(false);

  // Function to open WhereModal
  const openWhereModal = () => {
    setIsWhereModalOpen(true);
  };

  // Function to close WhereModal
  const closeWhereModal = () => {
    setIsWhereModalOpen(false);
  };

  return (
    <>
      <nav className="w-screen h-48 bg-white shadow-md">
        <div className="flex justify-between pt-5 px-10">
          <div>
            {/* Responsive logo */}
            <span className="block lg:hidden">
              <Airbub_logo_svg />
            </span>
            <span className="hidden lg:block">
              <Airbub_svg />
            </span>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex lg:flex">
            <ul className="flex gap-10 text-lg text-center items-center">
              <li className="relative font-semibold w-20 h-10 flex items-center justify-center hover:bg-gray-100 hover:rounded-full transition duration-300">
                <Link href="/">Stays</Link>
              </li>
              <li className="flex items-center text-gray-400">
                <Link href="/experiences">Experiences</Link>
              </li>
            </ul>
          </div>

          <ul className="flex gap-4 items-center">
            <li className="flex items-center">Airbub your home</li>
            <li className="flex items-center">
              <TfiWorld aria-label="World Icon" />
            </li>
            <li>
              <button className="flex items-center gap-2" aria-label="Account Menu">
                <IoMdMenu className='text-2xl' />
                <Account_svg />
              </button>
            </li>
          </ul>
        </div>

        {/* Filter Section */}
        <div className="mt-5 flex items-center justify-center">
          <div className="w-[90%] lg:w-[58%] flex items-center justify-center rounded-full border-2 shadow-lg mx-5">
            <div className="flex items-center justify-between w-full">
              {filterItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative cursor-pointer ${item.isHidden ? 'hidden lg:flex' : 'flex'} flex-col ${item.isSearchButton ? 'lg:flex-row items-center justify-between' : 'items-center'
                      } px-4 py-2 w-[${item.width}] hover:bg-slate-300 rounded-full transition-all duration-300 group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`${item.isSearchButton ? 'flex flex-col lg:flex-row lg:items-center' : ''}`}>
                        <label className="w-full text-gray-700 font-medium mb-1 lg:mb-0">{item.label}</label>
                        <div
                          className={`w-full rounded-full ${item.isModal ? 'cursor-pointer' : ''}`}
                          onClick={item.isModal ? openWhereModal : undefined}
                        >
                          <p className="text-gray-400">{item.placeholder}</p>
                        </div>
                      </div>
                    </div>
                    {item.isSearchButton && (
                      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF385C] text-white font-bold group-hover:bg-rose-700 transition-colors duration-300">
                        <CiSearch size={24} />
                      </button>
                    )}
                  </div>

                  {/* Vertical divider*/}
                  {index !== filterItems.length - 1 &&  (
                    hoveredIndex!==index && hoveredIndex-1 !==index  &&
                    <div className="hidden lg:block border-l border-gray-300 h-10 transition-all duration-300 group-hover:hidden"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
