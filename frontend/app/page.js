'use client';
import CardWrapper from "@/components/CardWrapper";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { host } from '@/lib/host'

export default function Home() {
  const [iconData, setIconData] = useState([])
  const [past_experience_icon, setPast_experience_icon] = useState([])

  useEffect(() => {
    axios.get(`${host}api/getairbnb`, {
      params: { pathName: '/icon' },
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        setPast_experience_icon(res.data.airbnbItems);
        setIconData(res.data.airbnbpresentItems);
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
      <div>
        <h1 className="font-semibold text-2xl">Past Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {past_experience_icon?.map((item, index) => (
            <div key={index} className="p-2">
              <CardWrapper FilterData={item} />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
