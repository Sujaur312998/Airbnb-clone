import CardWrapper from "@/components/CardWrapper";
import React from 'react';
import { iconData, past_experience_icon } from '@/lib/iconData'

export default function Home() {
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
