import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci"
import { cn } from '@/lib/utils'




const SearchSection = ({ dynamicFilterItems, openWhereModal, hoveredIndex, setHoveredIndex }) => {

    return (
        <div className="w-[90%] lg:w-[60%] flex items-center justify-center rounded-full border-2 shadow-md ">
            <div className="flex items-center w-full">
                {dynamicFilterItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <div
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={cn(
                                `relative cursor-pointer px-4 py-2 flex-grow flex justify-between hover:bg-slate-100 rounded-full transition-colors duration-300 group w-[${item.width}]`,
                                item.isHidden ? 'hidden md:flex' : 'flex',
                                index === dynamicFilterItems.length - 1 ? 'hidden md:flex' : ''
                            )}
                            onClick={item.isModal ? openWhereModal : undefined}
                        >
                            <div className={cn(index === 0 ? 'md:pl-6' : '')}>
                                <div className="px-1 flex">
                                    {/* Search button visible on small screens */}
                                    {
                                        index === 0 && (
                                            <button className="flex items-center justify-center w-12 h-12 rounded-full font-bold md:hidden">
                                                <CiSearch size={24} />
                                            </button>
                                        )
                                    }

                                    <div>
                                        {/* Change label and placeholder for smaller devices */}
                                        <label className=" text-gray-700 font-medium mb-1 md:mb-0">
                                            {
                                                index === 0 ? (
                                                    <>
                                                        <span className="md:hidden">Where to</span>{' '}
                                                        {/* For small screens */}
                                                        <span className="hidden md:inline">{item.label}</span>{' '}
                                                        {/* For large screens */}
                                                    </>
                                                ) : (
                                                    <span className="hidden md:inline">{item.label}</span>
                                                )
                                            }
                                        </label>
                                        <div
                                            className="w-full rounded-full"

                                        >
                                            <p className="text-gray-400">
                                                {index === 0 ? (
                                                    <>
                                                        <span className="md:hidden text-sm">
                                                            Anywhere ● Any week ● Add guest
                                                        </span>{' '}
                                                        {/* For small screens */}
                                                        <span className="hidden md:inline">
                                                            {item.placeholder}
                                                        </span>{' '}
                                                        {/* For large screens */}
                                                    </>
                                                ) : (
                                                    <span className="hidden md:inline">
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
                                <div className="hidden md:inline-block border-l border-gray-400 h-10"></div>
                            )
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SearchSection
