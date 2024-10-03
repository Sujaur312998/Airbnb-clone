import React from 'react'
import { CiSearch } from "react-icons/ci";

const NavigationItemsSecond = () => {
  return (
    <div className="w-[40%] flex items-center justify-between rounded-full border transition-transform duration-500 ease-in-out opacity-100 scale-100 translate-y-0 border-gray-300 shadow-sm">
      <div className="px-3 py-2 flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm">Anywhere</div>
      <span className="mx-2 h-6 border-l border-gray-400"></span>
      <div className="px-3 py-2 flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm">Any week</div>
      <span className="mx-2 h-6 border-l border-gray-400"></span>

      <div className="px-3 py-2 flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-sm">
        Add guest
      </div>
      <button className="flex items-center mr-1 py-1 justify-center w-7 h-7 rounded-full bg-[#FF385C] text-white font-bold hover:bg-rose-600 transition-colors duration-300 ml-2">
        <CiSearch size={14} />
      </button>
    </div>
  )
}

export default NavigationItemsSecond
