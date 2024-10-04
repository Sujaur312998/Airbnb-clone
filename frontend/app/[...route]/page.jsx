'use client';
import CardWrapper from '@/components/CardWrapper'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host } from '@/lib/host';
import { usePathname } from 'next/navigation'

const Rooms = () => {
    const [iconData, setIconData] = useState([])
    const pathName = usePathname()

    useEffect(() => {
        axios.get(`${host}api/getairbnb`, {
          params: { pathName },
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then(res => {
            setIconData(res.data.others);
          })
          .catch(err => console.log(err))
      }, [])
    return (
        <div className="px-2 md:px-10 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {iconData?.map((item, index) => (
                    <div key={index} className="p-2">
                        <CardWrapper FilterData={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Rooms
