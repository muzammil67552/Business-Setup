import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


const Contact = () => {
    return (
        <div className='antialiased bg-gray-50 mt-10'>
        <div className='flex w-full min-h-screen justify-center items-center'>
          <div className='flex flex-col md:flex-row md:space-x-8 bg-cyan-700 w-full max-w-6xl p-10 rounded-xl shadow-lg text-white'>
  
              {/* Left Section */}
              <div className='flex flex-col justify-between space-y-8 md:w-1/2'>
                  <div>
                      <h1 className="md:text-5xl text-3xl font-bold tracking-wide">Get In Touch</h1>
                      <p className='pt-4 text-white text-base'>
                          For More Understanding and Growing Your Business Stay Tuned and Connect With Us
                      </p>
                  </div>
  
                  <div className='space-y-4  space-x-3 flex flex-col '>
                      <div className='inline-flex space-x-3 items-center'>
                          <IoCall className='text-teal-300 text-2xl'/>
                          <span>+(0096895259360)</span>
                      </div>
                      <div className='inline-flex space-x-3 items-center'>
                          <FaEnvelope className='text-teal-300 text-2xl'/>
                          <span>info@gmail.com</span>
                      </div>
                      <div className='inline-flex space-x-3 items-center'>
                          <FaLocationDot className='text-teal-300 text-2xl'/>
                          <span>
                              Al Badi Building Near Lulu Center, Ruwi Muscat, Oman
                          </span>
                      </div>
                  </div>
  
                  <div className='flex space-x-6 mt-6 text-xl md:mb-0'>
                      <a href=''><FaFacebook className="hover:text-blue-500 cursor-pointer h-7 w-7" /></a>
                      <a href=''><FaTwitter className="hover:text-blue-500 cursor-pointer h-7 w-7" /></a>
                      <a href=''><FaInstagram className="hover:text-pink-500 cursor-pointer h-7 w-7" /></a>
                      <a href=''><FaLinkedin className="hover:text-blue-600 cursor-pointer h-7 w-7" /></a>
                  </div>
              </div>
  
              {/* Right Section */}
              <div className='bg-white rounded-xl shadow-xl p-8 text-gray-800 font-semibold md:w-1/2 md:mt-0 mt-6'>
                  <form className='flex flex-col space-y-6'>
                      <div>
                          <label htmlFor='' className='text-sm'>Your Name</label>
                          <input
                              type='text'
                              placeholder='Enter Your Name'
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 border-b'
                          />
                      </div>
                      <div>
                          <label htmlFor='' className='text-sm'>Email Address</label>
                          <input
                              type='email'
                              placeholder='Email Address'
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 border-b'
                          />
                      </div>
                      <div>
                          <label htmlFor='' className='text-sm'>Message</label>
                          <textarea
                              placeholder='Your Message'
                              rows="4"
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 border-b'>
                          </textarea>
                      </div>
                      <button className="bg-cyan-700 text-white py-3 rounded-lg hover:bg-teal-500 transition duration-300">
                          Send Message
                      </button>
                  </form>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Contact;