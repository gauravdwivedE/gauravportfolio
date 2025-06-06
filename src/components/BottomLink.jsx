import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const BottomLink = ({text, link}) => {
  return (
    <p className='text-[13px] mt-17 mb-8 flex gap-10 items-center'>
    <NavLink href={link} className="relative group text-gray-600">
      <span className="group-hover:text-black transition-colors duration-300">
        {text}
      </span>
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-black scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
    </NavLink>
    <BsArrowRight className='text-2xl font-light animate-ping' />
  </p>
  )
}

export default BottomLink
