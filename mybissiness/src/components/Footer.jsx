import { FaFacebook,  FaLinkedin, FaInstagram , FaYoutube,} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white mt-36 md:px-24 '>
           
            {/* Main footer section */}
            <div className='max-w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-16 text-base md:text-xl '>
                <div>
                    {/* Logo and Title Section */}
                    <a href='#' className='flex items-center space-x-4'>
                        <img 
                            src='/Logo 1.png' 
                            alt='Logo' 
                            className='w-28 h-28 rounded-md bg-gray-900 p-2'
                        />
                        <h1 className='md:text-2xl text-xl font-semibold mb-2 w-full'>PARACHA ENTERPRISE & CONTRACTING LLC</h1>
                    </a>
                    <p className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300 w-full'>
                        Al Badi Building Near Lulu Center Ruwi Muscat<span className='text-2xl text-[#4CAF4F] mx-5 cursor-pointer hover:text-gray-300 duration-300'>Oman</span>
                    </p>
                    <a href='mailto:petac160@gmail.com' target='__jump' className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>petac160@gmail.com</a>
                    <p className='mx-5 mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>0096895259360</p>
                </div>

                <div className='md:mx-24 w-full mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Business Information</h1>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Services</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Support</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Contact Us</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Social Media</p>
                    <p className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Privacy Policy</p>
                </div>

                <div className='md:mx-24 w-full mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Useful Links</h1>
                    <ul>
                        <NavLink to="/">
                              <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Home page</li>
                        </NavLink>
                        <NavLink to="/about">
                              <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>About Us</li>
                        </NavLink>
                        <NavLink to="/contact">
                              <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Contact Us</li>
                        </NavLink>
                        <NavLink to="/service/pro-service">
                              <li className=' mt-2 text-base cursor-pointer hover:text-gray-300 duration-300'>Pro Services</li>
                        </NavLink>
                    </ul>
                </div>

                <div className='md:mx-20 w-full mx-4'>
                    <h1 className='md:text-2xl text-xl font-semibold mb-2'>Our Team</h1>
                    <div className="flex flex-col">
                    <a href="https://wa.me/96895259310" target="__jump" className="mt-2 text-base cursor-pointer hover:text-gray-400 duration-300">
                    Mr: Umair Paracha
                    </a>
                    <a href="https://wa.me/96895259360" target="__jump" className="mt-2 text-base cursor-pointer hover:text-gray-400 duration-300">
                    Mr: SaifUllah Mahmmod
                    </a>
                    <a href="https://wa.me/96877148859" target="__jump" className="mt-2 text-base cursor-pointer hover:text-gray-400 duration-300">
                    Umer Feroz
                    </a>
                    </div>
                </div>
            </div>

            {/* Copyright and Social Media Icons */}
            <div className='max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-4 text-gray-400 text-sm pb-8'>
                <span className='md:text-xl'>© 2024 Apply All Rights Reserved</span>
                <span className='md:text-xl'>PETAC Business Consultant | Terms and Privacy</span>
                <div className='flex justify-center space-x-4'>
                    <a href='https://www.facebook.com/profile.php?id=61564869346567' target="__jump"><FaFacebook className="hover:text-blue-500 cursor-pointer h-6 w-6" /></a>
                    <a href='https://www.youtube.com/channel/UC_ZBMmpDwjqNPbWlOsVh1Jw' target="__jump"><FaYoutube className="hover:text-blue-400 cursor-pointer h-6 w-6" /></a>
                    <a href='https://www.instagram.com/petac54' target="__jump"><FaInstagram className="hover:text-pink-500 cursor-pointer h-6 w-6" /></a>
                    <a href='https://www.linkedin.com/in/petac-petac-537285330/' target="__jump"><FaLinkedin className="hover:text-blue-600 cursor-pointer h-6 w-6" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
