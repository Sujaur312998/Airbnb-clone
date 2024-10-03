import React from 'react'
import Airbub_svg from '@/public/svg/Airbub_svg';
import Airbub_logo_svg from '@/public/svg/Airbub_logo_svg';

const Logo = () => {
  return (
    <div className='pl-6'>
      {/* Responsive logo */}
      <span className="block lg:hidden">
        <Airbub_logo_svg />
      </span>
      <span className="hidden lg:block">
        <Airbub_svg />
      </span>
    </div>
  )
}

export default Logo
