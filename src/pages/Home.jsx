import React, { useEffect } from 'react'
import GlitchMusicText from '../components/GlitchMusicText';
import { Helmet } from 'react-helmet';
import ContactIcons from '../components/ContactIcons';
import BottomLink from '../components/BottomLink';
import theme from '../hooks/theme';

const Home = () => {
  const {setableTheme} = theme()
console.log(setableTheme);

  return (
    <>
    <Helmet>
      <title>Home | Gaurav Dwivedi </title>
    </Helmet>
    <div className='w-full flex items-center flex-col pt-6 flex-wrap '>
      <div className={`w-full p-4 sm:w-[65vw] sm:p-0 `}>
      <GlitchMusicText />
     <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full'>
     <p className='leading-8'>I’m passionate about crafting seamless digital experiences from both ends—building intuitive, engaging frontend interfaces and powering them with robust, efficient backend systems. As a <b className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>frontend developer</b>, UX architect, and <b className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>backend engineer</b>, I blend creativity and logic to turn ideas into scalable, high-performance web applications.</p>
    <p className='leading-8'>Driven by a minimalist philosophy, I find elegance in simplicity and precision—whether in code, design, or user experience. Outside of the digital world, you’ll catch me exploring the magic of photochromic lenses or losing myself in the rhythms of pop and jazz music.
    Every line of code I write is a step toward creating something meaningful.
    anyways you can <b className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Contact Me</b>
    </p>

    <BottomLink text = "See More About Me" link = "/about"/>
   <ContactIcons/>
     </div>
     </div>
    </div>
    </>
  )
}

export default Home
