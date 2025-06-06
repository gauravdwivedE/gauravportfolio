import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
const ContactIcons = () => {
  return (
    <p className="flex gap-7 text-lg">
    {[
      {icon: <RiTwitterXLine />,link:'https://x.com/_Gaurav121' },
      {icon:<FaLinkedinIn />, link:'https://www.linkedin.com/in/gaurav-dwivedi-2b26b326b/'},
      {icon: <BiLogoGmail />,link:'mailto:gauravdwivedi479@gmail.com'},
     { icon: <FaGithub />,link:'https://github.com/gauravdwivedE'},
      {icon: <BsInstagram />, link:'https://www.instagram.com/_gaurav.0__/'}
    ].map((item, index) => (
      <a
        href = {item.link}
        target='_blank'
        key={index}
        className="w-5 flex text-gray-500 items-center justify-center cursor-pointer transition-transform duration-200 transform hover:scale-125 hover:text-black hover:font-bold"
      >
        {item.icon}
      </a>
    ))}
    </p>
  )
}

export default ContactIcons
