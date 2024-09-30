import { useEffect, useState } from 'react';
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle Dropdown
    const handleDropdownClick = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name); 
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
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { 
            name: "Service" ,
            path: "#" , 
            dropdown: [
                { label: "Company Registration", path: "/service/company-registration" },
                { label: "LLC License & Formation", path: "/service/llc-license-formation" },
                { label: "Investor Company Formation", path: "/service/investor-company-formation" },
                { label: "Pro Service", path: "/service/pro-service" },
                { label: "Oman Visa Clearance", path: "/service/oman-visa-clearance" },
                { label: "Mobile Software & Hardware", path: "/service/oman-visa-clearance" },
                { label: "Garments", path: "/service/oman-visa-clearance" },
                { label: "Carpentry", path: "/service/oman-visa-clearance" },
            ] 
        },
        { name: "Real State", path: "/real-state" },
        { 
            name: "Resources", 
            path: "", 
            dropdown: [
                { label: "Blogs", path: "/resources/blogs" }
            ] 
        },
        { 
            name: "FAQ", 
            path: "#", 
            dropdown: [
                { label: "Contact Us", path: "/contact" },
                { label: "Technical", path: "/faq/technical" }
            ] 
        },
    ];

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0 mt-10 border-b'>
            <nav className={`py-2 lg:px-14 px-4 transition-all duration-300 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href='#' className='flex items-center'>
                    <img src='/logo.jpg' alt='Logo' className='md:w-24 md:h-24 w-16 h-16 rounded-full' />

                        <span className='text-[#263238] text-2xl font-semibold mx-2'>PETAC</span>
                    </a>

                    {/* navItems For Large Devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ name, path, dropdown }) => (
                            <li key={path} className="relative group">
                                <a 
                                    href={dropdown ? '#' : path} 
                                    onClick={dropdown ? (e) => { e.preventDefault(); handleDropdownClick(name); } : null}
                                    className="block text-xl text-gray-900 hover:text-[#4CAF4F] duration-200 first:font-medium"
                                >
                                    {name}
                                </a>
                                {dropdown && (
                                    <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-green-300 shadow-lg ${activeDropdown === name ? 'block' : 'hidden'} group-hover:block`}>
                                        {dropdown.map(({ label, path }, index) => (
                                            <a key={index} href={path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 border-b">
                                                {label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Btn For Contact */}
                    <div className='space-x-12 hidden lg:flex items-center'>

                       <NavLink to="/calculated-form">
                        <button className='btn-primary'>
                            QUOTE
                        </button>
                       </NavLink>
                       
                        <NavLink to="/contact">
                        <button className='btn-primary'>
                            Contact
                        </button>
                        </NavLink>
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
                        {navItems.map(({ name, path, dropdown }) => (
                            <li key={path} className="relative">
                                <a 
                                    href={dropdown ? '#' : path} 
                                    onClick={dropdown ? (e) => { e.preventDefault(); handleDropdownClick(name); } : null}
                                    className="block text-xl text-gray-900 hover:text-[#4CAF4F] duration-500 first:font-medium"
                                >
                                    {name}
                                </a>
                                
                                {dropdown && (
                                    <div 
                                        className={`mt-2 w-full bg-gray-100 border border-gray-300 shadow-lg ${activeDropdown === name ? 'block' : 'hidden'}`}
                                        style={{ zIndex: 10 }} // Ensure dropdown opens below the parent and has higher z-index
                                    >
                                        {dropdown.map(({ label, path }, index) => (
                                            <a key={index} href={path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                {label}
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
