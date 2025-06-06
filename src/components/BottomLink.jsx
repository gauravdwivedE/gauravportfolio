import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import theme from '../hooks/theme';

const BottomLink = ({text, link}) => {
  const {setableTheme, settingTheme} = theme();

  const hoverTextColor = setableTheme === 'dark' ? 'text-gray-500' : 'text-black';
  const hoverUnderlineColor = setableTheme === 'dark' ? 'bg-gray-500' : 'bg-black';

  return (
    <p className='text-[13px] mt-17 mb-8 flex gap-10 items-center'>
    <NavLink to={link} className="relative group text-gray-600">
      <span className={`group-hover:${hoverTextColor} transition-colors duration-300`}>
        {text}
      </span>
      <span className={`absolute left-0 -bottom-1 w-full h-[1px] ${hoverUnderlineColor} scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100`}></span>
    </NavLink>
    <BsArrowRight className='text-2xl font-light animate-ping' />
  </p>
  )
}

export default BottomLink
