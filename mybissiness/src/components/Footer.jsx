import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white mt-36'>
           
            {/* Main footer section */}
            <div className='max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-16 text-base md:text-xl mx-12'>
                <div>
                    {/* Logo and Title Section */}
                    <a href='#' className='flex items-center space-x-4'>
                        <img 
                            src='/main logo 1.png' 
                            alt='Logo' 
                            className='w-20 h-20 rounded-full bg-gray-900 p-2'
                        />
                        <h1 className='md:text-2xl text-xl font-semibold mb-2'>PARACHA ENTERPRISE & CONTRACTING LLC</h1>
                    </a>
                    <p className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>
                        Al Badi Building Near Lulu Center Ruwi Muscat<span className='text-2xl text-[#4CAF4F] mx-5 cursor-pointer hover:text-gray-300 duration-300'>Oman</span>
                    </p>
                    <p className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>brandseller277@gmail.com</p>
                    <p className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>0096895259360</p>
                </div>

                <div className='md:mx-0 mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Business Information</h1>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Services</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Support</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Contact Us</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Social Media</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Privacy Policy</p>
                </div>

                <div className='md:mx-0 mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Useful Links</h1>
                    <ul>
                        <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Home page</li>
                        <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>About Us</li>
                        <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Contact Us</li>
                    </ul>
                </div>

                <div className='md:mx-0 mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Our Team</h1>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>GULL AHMED</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>BONANZA</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>Carina</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>AL KARAM</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>J.</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>SAYA</p>
                    <p className='mt-2 text-base cursor-pointer hover:text-gray-400 duration-300'>OTHERS</p>
                </div>
            </div>

            {/* Copyright and Social Media Icons */}
            <div className='max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 text-gray-400 text-sm pb-8'>
                <span className='md:text-xl'>© 2024 Apply All Rights Reserved</span>
                <span className='md:text-xl'>PETAC Business Consultant | Terms and Privacy</span>
                <div className='flex justify-center space-x-4'>
                    <FaFacebook className="hover:text-blue-500 cursor-pointer h-6 w-6" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer h-6 w-6" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer h-6 w-6" />
                    <FaLinkedin className="hover:text-blue-600 cursor-pointer h-6 w-6" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
