import React, { useEffect, useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Dropdown
    const handleDropdown = (item) => {
        setActiveDropdown(activeDropdown === item ? null : item);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // NavLink Names In Array
    const navItems = [
        { Link: "Home", path: "home" },
        { Link: "About", path: "about" },
        { Link: "Service", path: "service", dropdown: ["Consulting", "Training", "Support"] },
        { Link: "Testimonial", path: "testimonial", dropdown: ["Client 1", "Client 2"] },
        { Link: "FAQ", path: "faq", dropdown: ["General", "Technical","General", "Technical"] },
    ];

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0 mt-10 border-b'>
            <nav className={`py-2 lg:px-14 px-4 transition-all duration-300 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='#' className='flex items-center'>
                        <img src='/main logo 1.png' alt='Logo' className='w-28 h-28' />
                        <span className='text-[#263238] text-2xl font-semibold -m-'>PETAC</span>
                    </a>

                    {/* navItems For Large Devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ Link, path, dropdown }) => (
                            <li key={path} className="relative group">
                                <a 
                                    href={dropdown ? '#' : `#${path}`} 
                                    onClick={dropdown ? (e) => { e.preventDefault(); handleDropdown(path); } : null}
                                    className="block text-xl text-gray-900 hover:text-[#4CAF4F] duration-200 first:font-medium"
                                >
                                    {Link}
                                </a>
                                {dropdown && (
                                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-green-300 shadow-lg ${activeDropdown === path ? 'block' : 'hidden'} group-hover:block`}>
                                        {dropdown.map((item, index) => (
                                            <a key={index} href={`#${item}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b">
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Btn For Contact */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a className='text-[#4CAF4F] hover:text-gray-900 cursor-pointer text-xl'>Login</a>
                        <button className='btn-primary'>
                            Sign Up
                        </button>
                    </div>

                    {/* Btn For Mobile Just */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='text-[#4D4D4D] w-10 h-10 sm:w-12 sm:h-12' /> : <FaBars className='text-[#4D4D4D] w-8 h-8 sm:w-10 sm:h-10' />}
                        </button>
                    </div>
                </div>

                {/* NavItems For Mobile Devices */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 bg-gray-200 px-4 py-7`}>
                    <ul className='space-y-4'>
                        {navItems.map(({ Link, path, dropdown }) => (
                            <li key={path} className="relative">
                                <a 
                                    href={dropdown ? '#' : `#${path}`} 
                                    onClick={dropdown ? (e) => { e.preventDefault(); handleDropdown(path); } : null}
                                    className="block text-xl text-gray-900 hover:text-[#4CAF4F] duration-500 first:font-medium"
                                >
                                    {Link}
                                </a>
                                {dropdown && (
                                    <div 
                                        className={`absolute left-0 mt-2 w-full bg-gray-100 border border-gray-300 shadow-lg ${activeDropdown === path ? 'block' : 'hidden'}`}
                                        style={{ top: '100%', zIndex: 10 }} // Ensure dropdown opens below the parent and has higher z-index
                                    >
                                        {dropdown.map((item, index) => (
                                            <a key={index} href={`#${item}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                {item}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
