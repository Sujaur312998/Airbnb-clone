'use client';
import React, { useState } from 'react';
import Left_arrow_svg from '@/public/svg/Left_arrow_svg';
import Right_arrow_svg from '@/public/svg/Right_arrow_svg';
import Share_svg from '@/public/svg/share_svg';
import { cn } from '@/lib/utils';
import { useSelector } from 'react-redux';

const CardWrapper = ({ FilterData, maxPrice, minPrice }) => {
    const { src, title, host, price, unit, publish, status } = FilterData;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { tax } = useSelector(state => state.filter)

    // Function to go to the next image
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === src.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? src.length - 1 : prevIndex - 1));
    };

    // Check if the current image exists and is not empty
    const currentImage = src[currentIndex] && src[currentIndex].trim() !== "" ? src[currentIndex] : null;

    return (
        <div className="relative flex items-center justify-center flex-col">
            {/* Image Display */}
            <div
                className="relative w-full flex items-center justify-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {currentImage ? (
                    <img className="w-full h-64 object-cover rounded-2xl" src={currentImage} alt={title} />
                ) : (
                    <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
                        No Image Available
                    </div>
                )}

                {/* Share Icon */}
                <button
                    className='absolute right-4 top-8 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10'
                >
                    <Share_svg />
                </button>

                {/* Left Arrow */}
                {
                    currentIndex > 0 && ( // Show only if not the first image
                        <button
                            onClick={goToPrevious}
                            className={
                                cn(
                                    'absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10',
                                    isHovered ? 'block' : 'hidden'
                                )
                            }
                        >
                            <Left_arrow_svg />
                        </button>
                    )
                }

                {/* Right Arrow */}
                {
                    currentIndex === src.length - 1 ? null : <button
                        onClick={goToNext}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 ${isHovered ? 'block' : 'hidden'}`}
                    >
                        <Right_arrow_svg />
                    </button>
                }

            </div>

            {/* Information Display */}
            <div className="text-left mt-4 w-full">
                <p className="font-semibold text-md">{title}</p>
                <p className="text-gray-500 text-sm">{host ? `${host}` : null}</p>
                <p className="text-gray-700">{price || unit ?
                    `$${tax ? Math.floor(price + (price * 10) / 100) : price} ${unit}`
                    : null}</p>
                <p className="text-black font-semibold">{publish ? `${publish}` : null}</p>
                <p className="text-black font-semibold">{status ? `${status}` : null}</p>
            </div>
        </div>
    );
};

export default CardWrapper;