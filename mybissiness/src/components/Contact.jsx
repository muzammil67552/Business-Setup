/* eslint-disable react/no-unknown-property */
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";


const Contact = () => {
    return (
        <div className='antialiased bg-white  mt-16'>
        <div className='flex w-full min-h-screen justify-center items-center'>
          <div className='flex flex-col md:flex-row md:space-x-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 w-full max-w-6xl p-10 rounded-xl shadow-lg text-white'>
  
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
                      <a href='https://www.facebook.com/profile.php?id=61564869346567' target="__jump"><FaFacebook className="hover:text-blue-500 cursor-pointer h-7 w-7" /></a>
                      <a href='https://www.youtube.com/channel/UC_ZBMmpDwjqNPbWlOsVh1Jw' target="__jump"><FaYoutube className="hover:text-blue-500 cursor-pointer h-7 w-7" /></a>
                      <a href='https://www.instagram.com/petac54' target="__jump"><FaInstagram className="hover:text-pink-500 cursor-pointer h-7 w-7" /></a>
                      <a href='https://www.linkedin.com/in/petac-petac-537285330/' target="__jump"><FaLinkedin className="hover:text-blue-600 cursor-pointer h-7 w-7" /></a>
                  </div>
              </div>
  
              {/* Right Section */}
              <div className='bg-white rounded-xl shadow-xl md:p-8 p-4  text-gray-800 font-semibold md:w-1/2 md:mt-0 mt-6 '>
                  <form className='flex flex-col space-y-6'>
                      <div>
                          <label htmlFor='' className='text-sm'>Your Name</label>
                          <input
                              type='text'
                              placeholder='Enter Your Name'
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 '
                          />
                      </div>
                      <div>
                          <label htmlFor='' className='text-sm'>Email Address</label>
                          <input
                              type='email'
                              placeholder='Email Address'
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 '
                          />
                      </div>
                      <div>
                          <label htmlFor='' className='text-sm'>Message</label>
                          <textarea
                              placeholder='Your Message'
                              rows="4"
                              className='mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-500 '>
                          </textarea>
                      </div>
                      <button className="btn-primary">
                          Send Message
                      </button>
                  </form>
              </div>
          </div>
         
      </div>

      <div  className=" md:space-x-8 w-full max-w-6xl text-center justify-center mx-auto items-center md:mt-6 mt-10 rounded-xl">

               <div className='space-y-3  space-x-3 flex flex-col md:mx-0 mx-4 '>
                      <div className='inline-flex space-x-3 items-center'>
                          <IoCall className='text-gray-700-300 text-2xl md:text-4xl'/>
                          <span className="md:text-2xl text-xl">+(0096895259360)</span>
                      </div>
                      <div className='inline-flex space-x-3 items-center'>
                          <FaEnvelope className='text-gray-700 text-2xl md:text-4xl'/>
                          <span className="md:text-2xl text-xl">petac160@gmail.com</span>
                      </div>
                      <div className='inline-flex space-x-3 items-center'>
                          <FaLocationDot className='text-gray-700-300 text-2xl md:text-4xl'/>
                          <span className="md:text-2xl text-xl">
                              Al Badi Building Near Lulu Center, Ruwi Muscat, Oman
                          </span>
                      </div>
                  </div>

         <div className="p-10 md:space-x-8 w-full max-w-6xl text-center justify-center mx-auto items-center rounded-xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234072.6186728007!2d58.217213087912214!3d23.55462426815719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f901a11f0425%3A0x2244b4a5b13bac63!2sLuLu%20Hypermarket%20-%20Ruwi!5e0!3m2!1sen!2s!4v1726819389996!5m2!1sen!2s" 
          width="100%" 
          height="450"
          style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
  </div>
    );
};

export default Contact;