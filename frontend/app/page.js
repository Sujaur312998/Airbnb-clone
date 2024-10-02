import CardWrapper from "@/components/card/CardWrapper";
import React from 'react';
import { iconData } from '@/lib/iconData'

export default function Home() {
  return (
    <div className="px-2 md:px-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {iconData?.map((item, index) => (
          <div key={index} className="p-2">
            <CardWrapper FilterData={item}/>
          </div>
        ))}
      </div>
    </div>

  );
}
