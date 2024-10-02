import React from 'react'
import { roomdata } from '@/lib/roomData'
import CardWrapper from '@/components/CardWrapper'

const Rooms = () => {
    return (
        <div className="px-2 md:px-10 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {roomdata?.map((item, index) => (
                    <div key={index} className="p-2">
                        <CardWrapper FilterData={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms
