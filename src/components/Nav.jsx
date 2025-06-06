import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import theme from '../hooks/theme';
import { IoIosFlower } from "react-icons/io";

const Nav = () => {
  const links = ['About', 'Projects', 'Contact'];
  const {setableTheme, settingTheme} = theme();
  console.log(setableTheme);


  const hoverTextColor = setableTheme === 'dark' ? 'text-gray-500' : 'text-black';
  const hoverUnderlineColor = setableTheme === 'dark' ? 'bg-gray-500' : 'bg-black';
  const svgFillColor = setableTheme === 'dark' ? 'fill-gray-300' : 'fill-black';

  return (
    <div className='w-full flex justify-between px-4 sm:px-[11.7vw] h-24 sm:h-42 items-center'>
      <Link to='/'>
        <IoIosFlower className={`text-4xl sm:text-[90px] ${hoverTextColor}`}/>
      </Link>
      <div className='space-x-8 text-[15px] text-gray-600 font-light flex items-center pr-1'>
        {links.map((item, idx) => (
          <NavLink
            key={idx}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              isActive ? 'hidden' : 'relative group'
            }
          >
            <span className={`group-hover:${hoverTextColor} transition-colors duration-300`}>
              {item}
            </span>
            <span
              className={`absolute left-0 -bottom-1 w-full h-[1px] ${hoverUnderlineColor} scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-150`}
            ></span>
          </NavLink>
        ))}
        <svg
          className={`cursor-pointer ${svgFillColor}`}
          onClick={() => settingTheme()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
