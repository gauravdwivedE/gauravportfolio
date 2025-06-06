import React from 'react'
import { Helmet } from 'react-helmet'
import { TbCodeCircle2Filled } from "react-icons/tb";
import { PiLaptopFill } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import ContactIcons from '../components/ContactIcons';
import BottomLink from '../components/BottomLink';
import theme from '../hooks/theme';

const About = () => {
  const {setableTheme} = theme()

  return (
    <>
     <Helmet>
      <title>About | Gaurav Dwivedi </title>
    </Helmet>
    <div className='w-full flex items-center flex-col pt-6 pb-4 flex-wrap'>
      <div className='w-full p-4 sm:w-[65vw] sm:p-3'>
        <h1 className='text-[3.2rem] font-extrabold mt-5'>About Me.</h1>
        
        <div className='relative w-full pb-15 bg-white-500 border-l-[1px] rounded border-gray-300 px-3 mt-12'>
            <div className='circle'></div>
            <h2 className='text-lg flex items-center gap-1 capitalize'>What defines me <TbCodeCircle2Filled/></h2>
            <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full leading-8'>
            <p className='mt-4'>
            I’m a self-driven <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Full Stack Web Developer</span> passionate about creating clean, efficient, and modern web applications. I specialize in both front-end and back-end development, combining a strong eye for design with a problem-solving mindset to build seamless user experiences and scalable server-side solutions. Whether it’s crafting responsive interfaces or architecting robust APIs, I focus on writing elegant, maintainable code that delivers real value. I thrive in fast-paced environments where innovation and learning are encouraged. To me, software development isn’t just about programming—it’s about creating meaningful experiences that solve problems and improve lives.
            </p>
            </div>
        </div>
        <div className='relative w-full pb-15 bg-white-500 border-l-[1px] rounded border-gray-300 px-3'>
            <div className='circle'></div>
            <h2 className='text-lg flex items-center gap-1 capitalize'> Front-End Development<PiLaptopFill/></h2>
            <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full leading-8'>
            <p className='mt-4'>
                Skilled in building responsive, interactive interfaces using HTML, CSS, and JavaScript.
                Experienced with <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>React.js</span>, Tailwind CSS, Bootstrap, and ShadCN UI.
                Proficient in creating accessible, cross-browser compatible UIs.
                Focused on performance, scalability, and clean UI design.
                Familiar with component-based architecture and reusable design systems.
                Comfortable integrating APIs and managing front-end state with <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Redux</span> or Context API.
            </p>
            </div>
        </div>

        <div className='relative w-full pb-15 bg-white-500 border-l-[1px] rounded border-gray-300 px-3'>
            <div className='circle'></div>
            <h2 className='text-lg flex items-center gap-1 capitalize'>Back-End Development<FaTools/></h2>
            <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full leading-8'>
            <p className='mt-4'>
            Proficient in building robust server-side applications using Node.js, <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Express.js</span>, and PHP.
            Experienced with databases like <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>MongoDB</span>, MySQL, and PostgreSQL.
            Skilled in designing secure, scalable RESTful APIs and integrating them with front-end apps.
            Familiar with authentication systems like <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>JWT</span> and OAuth2.
            Comfortable managing server environments, middleware, and backend logic.
            </p>
            </div>
        </div>


        <div className='relative w-full pb-15 bg-white-500 border-l-[1px] rounded border-gray-300 px-3'>
            <div className='circle'></div>
            <h2 className='text-lg flex items-center gap-1 capitalize'> DevOps & Tools<FaCloud/></h2>
            <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full leading-8'>
            <p className='mt-4'>
            Adept at version control using <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Git</span> and GitHub, containerizing applications with Docker, and API testing via Postman and Insomnia. Comfortable working with npm/yarn, modern code editors like VS Code, <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>CI/CD</span> concepts, and deploying applications on platforms like Netlify, Vercel, <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Render</span>, and Heroku.
            </p>
            </div>
        </div>

        <div className='relative w-full pb-15 bg-white-500 border-l-[1px] rounded border-gray-300 px-3'>
            <div className='circle'></div>
            <h2 className='text-lg flex items-center gap-1 capitalize'>Additional Capabilities<ImPower/></h2>
            <div className='text-[13px] sm:text-[14.5px] space-y-8 font-light text-gray-500 w-full leading-8'>
            <p className='mt-4'>
            Skilled in <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>JWT</span> and OAuth2 for authentication, container orchestration with Kubernetes, and message streaming using <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Kafka</span>. Experienced in API testing with Postman and Insomnia. Familiar with build tools like <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>Webpack</span> and Babel, cloud platforms including AWS and Firebase, and using AI tools like <span className={`uppercase text-md font-bold ${setableTheme =='dark'?'text-gray-400':'text-black'}`}>ChatGPT</span> to enhance development workflows.
            </p>
            </div>
        </div>
        <BottomLink text = "Lets Continue To Projects" link = "/projects"/>
        <ContactIcons/>
        </div>
    </div>
    </>
  )
}

export default About
