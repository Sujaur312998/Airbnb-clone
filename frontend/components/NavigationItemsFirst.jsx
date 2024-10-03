import React from 'react'
import { cn } from '@/lib/utils';

const NavigationItemsFirst = ({ mode, handleMode }) => {
    return (
        <div className="md:flex lg:flex lg:relative lg:top-0 lg:w-auto lg:items-center transition-transform duration-500 ease-in-out transform opacity-100 scale-100 translate-y-0 md:absolute w-full md:top-16 md:items-center md:justify-center">
            <ul className="flex gap-2 text-lg text-center items-center flex-shrink-0 whitespace-nowrap max-w-full">
                <li
                    onClick={handleMode}
                    className={cn(
                        'relative font-semibold px-4 py-1 flex items-center justify-center cursor-pointer hover:rounded-full transition-transform duration-300 ease-in-out',
                        mode ? 'text-black' : 'text-gray-400 hover:bg-gray-100'
                    )}
                >
                    Stays
                </li>

                <li
                    onClick={handleMode}
                    className={cn(
                        'relative font-semibold px-4 py-1 flex items-center justify-center cursor-pointer hover:rounded-full transition-transform duration-300 ease-in-out',
                        !mode ? 'text-black' : 'text-gray-400 hover:bg-gray-100'
                    )}
                >
                    Experiences
                </li>
            </ul>
        </div>
    )
}

export default NavigationItemsFirst
