import React from 'react'
import { Helmet } from 'react-helmet'
import ContactIcons from '../components/ContactIcons';
import BottomLink from '../components/BottomLink';
import theme from '../hooks/theme';

const Resume = () => {
  const {setableTheme} = theme()

  return (
    <>
     <Helmet>
      <title>Resume | Gaurav Dwivedi </title>
    </Helmet>
    <div className='w-full flex items-center flex-col pt-6 pb-4 flex-wrap'>
      <div className='w-full p-4 sm:w-[65vw] sm:p-3'>
        <h1 className='text-[3.2rem] font-extrabold mt-5'>Resume.</h1>
        <p className='text-gray-700 font-light text-sm mt-5'>
          Reach out to me via my{" "}
          <span className={`font-bold ${setableTheme === 'dark' ? 'text-gray-400' : 'text-black'}`}>contact page</span>.{" "}
          <span className={`font-bold ${setableTheme === 'dark' ? 'text-gray-400' : 'text-black'}`}>view</span>{" "}
          or{" "}
          <span className={`font-bold ${setableTheme === 'dark' ? 'text-gray-400' : 'text-black'}`}>download</span>{" "}
          the resume
        </p>
        <p className='mt-4'>Coming soon....</p>
        
        <BottomLink text="Are you convinced to contact me now ?" link="/contact" />
        <ContactIcons />
      </div>
    </div>
    </>
  )
}

export default Resume
