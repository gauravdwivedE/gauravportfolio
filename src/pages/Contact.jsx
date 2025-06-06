import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import ContactIcons from '../components/ContactIcons';
import BottomLink from '../components/BottomLink';
import emailjs from '@emailjs/browser';
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import theme from '../hooks/theme';

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState(false);
  const {setableTheme} = theme();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm('service_r1czqee', 'template_uqnxqy1', form.current, {
        publicKey: 'uxkQ0F4s_JUADq2vm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setLoading(false);
          setIsSend(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          seterror(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact | Gaurav Dwivedi </title>
      </Helmet>
      <div className='w-full flex items-center flex-col pt-6 pb-4 '>
        <div className='w-full p-4 sm:w-[65vw] sm:p-3'>
          <h1 className='text-[3.2rem] font-extrabold mt-5'>Contact.</h1>
          <p className='text-gray-700 font-light text-sm mt-5'>
            Get in touch or shoot me an email directly on{' '}
            <span className={`font-bold ${setableTheme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
              gauravdwivedi479@gmail.com
            </span>
          </p>

          <form ref={form} onSubmit={sendEmail} className='mt-12 space-y-6 '>
            <input
              type="text"
              name="name"
              className='p-3 px-6 border-[1px] rounded border-gray-200 w-full sm:w-[38vw] outline-none'
              placeholder='Name'
              required
            />
            <input
              type="email"
              name="email"
              className='p-3 px-6 border-[1px] rounded border-gray-200 w-full sm:w-[38vw] outline-none'
              placeholder='Email'
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              aria-required="true"
              required
              className='p-3 px-6 border-[1px] rounded border-gray-200 w-full sm:w-[38vw] outline-none'
            ></textarea>
            <p className='text-red-500'>{error}</p>
            <button
              className={`p-4 px-10 border-none outline-none cursor-pointer flex items-center gap-2 rounded text-sm transition-all
              ${loading ? 'pointer-events-none' : ''}
              ${isSend ? 'text-green-600 pointer-events-none' : ''}
              ${setableTheme === 'dark'
                ? 'bg-white text-black hover:text-gray-600'
                : 'bg-black text-white hover:text-gray-500'
              }`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className='animate-spin' />
              ) : isSend ? (
                <span className='flex gap-2 items-center'>
                  Message Sent <FaCheckCircle />
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          <BottomLink text="Go Back  Home" link="/" />
          <ContactIcons />
        </div>
      </div>
    </>
  )
}

export default Contact;
