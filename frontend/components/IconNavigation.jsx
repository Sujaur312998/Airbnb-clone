import React from 'react'
import Link from 'next/link'
import Left_arrow_svg from '@/public/svg/Left_arrow_svg'
import Right_arrow_svg from '@/public/svg/Right_arrow_svg'
import Filter_svg from '@/public/svg/Filter_svg'
import { usePathname } from 'next/navigation'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const IconNavigation = ({ isLeftArrowVisible, scrollRef, FilterData, handleScroll }) => {
    const pathname = usePathname();
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
                        <p className="text-center py-1">{item.title}</p>
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
                pathname !== '/' && (
                    <div className='flex'>
                        <Dialog>
                            <DialogTrigger className="md:flex gap-1 items-center justify-center ml-3 w-20 h-12 rounded-xl  cursor-pointer flex-shrink-0 flex px-6 py-2 border hover:border-2 hover:ring-1 hover:ring-black text-md ">
                                <Filter_svg />
                                <span>Filters</span>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        <div
                            className="md:flex gap-1  items-center justify-center ml-5 w-64 h-12 rounded-xl  cursor-pointer flex-shrink-0 flex px-2 py-2 border hover:border-2  hover:ring-1 hover:ring-black text-md "
                        // onClick={() => handleScroll('right')}
                        >
                            <span>Display total befor taxes</span>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                            </label>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default IconNavigation
