import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Left_arrow_svg from '@/public/svg/Left_arrow_svg'
import Right_arrow_svg from '@/public/svg/Right_arrow_svg'
import Filter_svg from '@/public/svg/Filter_svg'
import { useDispatch, useSelector } from 'react-redux'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { usePathname } from 'next/navigation'
import { f_value, f_tax } from '@/app/redux/filterSlice'


const IconNavigation = ({ isLeftArrowVisible, scrollRef, FilterData, handleScroll }) => {
    const pathName = usePathname();
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModal = () => setModalOpen(!isModalOpen);

    const dispatch = useDispatch()

    const { minPrice, maxPrice, values, items, tax } = useSelector(state => state.filter)

    const handleChange = (newValues) => {
        dispatch(f_value(newValues));
    };

    const handleTax = () => {
        dispatch(f_tax())
    }


    return (
        <div className="w-screen h-[84px] flex items-center justify-between px-2 md:px-10 overflow-hidden relative bg-white">
            {/* Left Arrow Button (hidden on small screens) */}
            {isLeftArrowVisible && (
                <button
                    className="md:flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer flex-shrink-0 hidden lg:flex"
                    onClick={() => handleScroll('left')}
                >
                    <Left_arrow_svg />
                </button>
            )}
            <div
                ref={scrollRef}
                className="flex-1 flex items-center justify-start overflow-x-auto whitespace-nowrap px-4 scrollbar-hide md:overflow-x-hidden"
            >
                {FilterData?.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                        className="flex flex-col items-center p-6 opacity-60 hover:opacity-100 cursor-pointer relative"
                    >
                        <img
                            className="w-7"
                            src={item.src}
                            alt={item.title}
                        />
                        <span className="text-center py-1">{item.title}</span>
                    </Link>
                ))}
            </div>
            {/* Right Arrow Button (hidden on small screens) */}
            <button
                className="md:flex items-center justify-center w-12 h-12 rounded-full shadow-md cursor-pointer flex-shrink-0 hidden lg:flex"
                onClick={() => handleScroll('right')}
            >
                <Right_arrow_svg />
            </button>
            {
                pathName !== '/' && (
                    <div className='flex'>
                        <button
                            data-modal-target="default-modal"
                            onClick={handleModal}
                            data-modal-toggle="default-modal"
                            className="md:flex gap-1 items-center justify-center ml-2 w-20 h-12 rounded-xl cursor-pointer flex-shrink-0 flex px-6 py-2 border hover:border-2 hover:ring-1 hover:ring-black text-md " type="button">
                            <Filter_svg />
                            Filter
                        </button>
                        {/* Modal */}
                        {isModalOpen && (
                            <div
                                id="default-modal"
                                tabIndex="-1"
                                aria-hidden="true"
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                            >
                                <div className="relative p-4 w-full max-w-2xl max-h-full">
                                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                            {/* Close button on the left */}
                                            <button
                                                type="button"
                                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                onClick={handleModal}
                                            >
                                                <svg
                                                    className="w-3 h-3"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 14"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                    />
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>

                                            {/* Title centered */}
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mx-auto">
                                                Filter
                                            </h3>

                                            {/* Invisible spacer for alignment */}
                                            <div className="w-8 h-8"></div>
                                        </div>

                                        <div className="h-72 mx-6 mt-2 overflow-y-auto">
                                            <h1 className="font-semibold text-xl py-4">Type of place</h1>
                                            <div className="p-1 gap-6 flex items-center justify-evenly border rounded-xl shadow-md bg-white">
                                                <button className="px-4 py-2 border-2 w-full border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-black transition duration-200">
                                                    Any type
                                                </button>
                                                <div className="hidden md:inline-block border-l border-gray-300 h-10"></div>
                                                <button className="px-4 py-2 border-2 w-full border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-black transition duration-200">
                                                    Room
                                                </button>
                                                <div className="hidden md:inline-block border-l border-gray-300 h-10"></div>
                                                <button className="px-4 py-2 border-2 w-full border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-black transition duration-200">
                                                    Entire home
                                                </button>
                                            </div>

                                            <hr className="my-4" />

                                            <div>
                                                <h1 className="font-semibold text-xl pt-6">Price range</h1>
                                                <h1 className="text-md text-gray-400">
                                                    Nightly prices before fees and taxes
                                                </h1>

                                                {/* Range Slider */}
                                                <div className="my-6 mx-5 ">
                                                    <RangeSlider
                                                        min={minPrice}
                                                        max={maxPrice}
                                                        step={1}
                                                        value={values}
                                                        onInput={handleChange}
                                                    />

                                                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                                                        <span>${values[0]}</span>
                                                        <span>${values[1]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center p-4 md:p-5 border-t justify-between border-gray-200 rounded-b dark:border-gray-600">
                                            <button onClick={handleModal} type="button" className="font-semibold">
                                                Clear all
                                            </button>
                                            <button
                                                onClick={handleModal}
                                                type="button"
                                                className="py-2.5 px-5 ms-3 text-sm font-medium text-white bg-black focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            >
                                                Show {items} places
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={handleTax}
                            className="md:flex gap-1 items-center justify-center ml-2 w-64 h-12 rounded-xl cursor-pointer flex-shrink-0 flex px-2 py-2 border hover:border-2 hover:ring-1 hover:ring-black text-md "
                        >
                            <span>Display total before taxes</span>
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    onClick={handleTax}
                                    value="" checked={tax} className="sr-only peer" readOnly />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                            </label>
                        </button>

                    </div>
                )
            }
        </div>
    )
}

export default IconNavigation;
