import React from 'react'
import { Helmet } from 'react-helmet'
import BottomLink from '../components/BottomLink';
import ContactIcons from '../components/ContactIcons';


const Projects = () => {

  return (
    <>
     <Helmet>
      <title>Projects | Gaurav Dwivedi </title>
    </Helmet>
    <div className='w-full flex items-center flex-col pt-6 pb-4 flex-wrap'>
      <div className='w-full p-4 sm:w-[65vw] sm:p-3'>
        <h1 className='text-[3.2rem] font-extrabold mt-5'>Projects.</h1>

        <div className='w-full  flex-col  flex gap-4 md:flex-row'>
        <div className='w-full md:w-1/2 h-full rounded-xl overflow-hidden space-y-6'>
       
       <div className='relative overflow-hidden group'>
       <video
            src="./heirly.mov"
            autoPlay
            loop
            muted
            playsInline
            className="border-none h-[55vh] outline-none rounded-xl  w-full object-cover"
        ></video>
        <a target='_blank' href='https://heirlycom.vercel.app' className='absolute top-0 text-white bg-transparent opacity-70 w-full h-full duration-500 rounded-xl transition-all group-hover:bg-black'>
        <div className='absolute -bottom-300 p-4 space-y-2 transition-all duration-400 group-hover:bottom-5'>
        <h2 className='text-xl font-semibold'>Heirly</h2>
            <p className='text-sm'> Job hunting and Job posting plateform</p>
            <div> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Ract</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Express</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Redux</button> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>REST</button>
            </div>
        </div>
        </a>
       </div>
       <div className='relative overflow-hidden group'>
        <img src="./boss.png" className='border-none h-[47vh] rounded-xl outline-none  w-full object-cover' />
        <a target='_blank'href = 'https://bossphotography.netlify.app/' className='absolute top-0 text-white bg-transparent opacity-80 w-full h-full duration-500 rounded-xl transition-all group-hover:bg-black'>
        <div className='absolute -bottom-300 p-4 space-y-2 transition-all duration-400 group-hover:bottom-5'>
        <h2 className='text-xl font-semibold'>Boss Photograpy</h2>
            <p className='text-sm'>Responsive animated website for photo studio promotion</p>
            <div> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>GSAP</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>HTML</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>CSS</button> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>JS</button>
            </div>
        </div>
        </a>
       </div>

        <div className='relative overflow-hidden group'>
        <img src="./bpa.png" className='border-none h-[47vh] rounded-xl outline-none  w-full object-cover' />
        <a target='_blank'href='https://balajiprogrammingacademy.vercel.app/' className='absolute top-0 text-white bg-transparent opacity-80 w-full h-full duration-500 rounded-xl transition-all group-hover:bg-black'>
        <div className='absolute -bottom-300 p-4 space-y-2 transition-all duration-400 group-hover:bottom-5'>
        <h2 className='text-xl font-semibold'>Balaji programming academy</h2>
            <p className='text-sm'>Responsive animated website for programming academy promotion</p>
            <div> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Three</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Framer</button>  
            </div>
        </div>
        </a>
       </div>
        </div>
        

        <div className='w-full md:w-1/2 h-full rounded-xl overflow-hidden space-y-6'>
       
        <div className='relative overflow-hidden group'>
        <img src="./tcl.png" className='border-none outline-none h-[67vh] rounded-xl w-full object-cover'/>
        <a target='_blank'href='https://thecentrallibrary.in' className='absolute top-0 text-white bg-transparent opacity-80 w-full h-full duration-500 rounded-xl transition-all group-hover:bg-black'>
        <div className='absolute -bottom-300 p-4 space-y-2 transition-all duration-400 group-hover:bottom-5'>
        <h2 className='text-xl font-semibold'>The central library</h2>
            <p className='text-sm'>Custome libray management system live project</p>
            <div> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Html</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>css</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>JS</button> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>PHP</button> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>My SQL</button>
            </div>
        </div>
        </a>
       </div>

        <div className='relative overflow-hidden group'>
        <img src="./eventa.png" className='border-none outline-none h-[67vh] rounded-xl w-full object-cover'/>
        <a target='_blank'href='https://eventa-ui.vercel.app' className='absolute top-0 text-white bg-transparent opacity-80 w-full h-full duration-500 rounded-xl transition-all group-hover:bg-black'>
        <div className='absolute -bottom-300 p-4 space-y-2 transition-all duration-400 group-hover:bottom-5'>
        <h2 className='text-xl font-semibold'>Eventa ui</h2>
            <p className='text-sm'>Custome event management system live project</p>
            <div> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>React</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Express</button>  <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>Redux</button> <button className='px-4 py-[2px] bg-gray-400  rounded-xl  text-[10px]'>REST</button> 
            </div>
        </div>
        </a>
       </div>
        </div>
        </div>

        
        <BottomLink text = "Lets Go To My Resume" link = "/resume"/>
        <ContactIcons/>
        </div>
    </div>
    </>
  )
}

export default Projects
