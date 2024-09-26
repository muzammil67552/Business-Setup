/* eslint-disable react/no-unescaped-entities */
import { NavLink } from 'react-router-dom';
import { BlogsCatagories } from '../assets/ServiceCatagory';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";


const Blogs = () => {
    const BlogsCards = [
        {
            id: 1,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 2,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 2,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 3,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 4,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 5,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 6,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
        {
            id: 7,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/modern-business", // path are redirect from app.jsx
        },
    ];

    return (
        <>
            {/* Banner Section */}
            <div className="relative h-64 md:h-96 w-full md:mt-36 page-top group">
                <img src="/blog banner.png" className="w-full h-full" alt="Banner" />

                {/* Heading to appear on image hover */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                        Blogs Section
                    </h1>
                </div>
            </div>

            <div className="bg-white px-4   md:mt-24 mt-24">
                <div className="px-4  max-w-screen-2xl mx-auto my-12 md:mt-24 mt-12">
                                {/* Main Heading */}
                    <div className="text-center md:w-1/2 mx-auto">
                        <h2 className="md:text-5xl text-2xl font-semibold mb-10">
                            <span className="text-[#4CAF4F]">News Letter</span> & Blogs
                        </h2>
                    </div>

                    {/* BlogsCard */}
                    <div className="container mx-auto gap-6 flex flex-col md:flex-row">
                        <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 items-center justify-between">
                                {BlogsCards.map((BlogsCards) => (
                                    <div
                                        key={BlogsCards.id}
                                        className="mx-auto relative mb-24 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <img src={BlogsCards.img} className="rounded-xl" alt="" />
                                        <div className="text-center px-4 py-8 bg-white shadow-2xl rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-20">
                                            <h3 className="mb-3 text-[#4D4D4D] font-semibold md:text-medium">
                                                {BlogsCards.title}
                                            </h3>
                                            <div className="flex flex-center justify-center gap-8">
                                                <NavLink to={BlogsCards.link}>
                                                    <button className="flex items-center justify-center text-center text-green-600 font-medium">
                                                        Learn More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5 ml-2 transition-transform transform group-hover:translate-x-1"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                                        </svg>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="w-full md:w-3/12">
                            <div className="rounded-xl shadow-xl text-white font-semibold md:mt-0 mt-6 bg-[#4CAF4F]">
                                <div className="p-8">
                                    <div>
                                        <h1 className="text-3xl font-semibold text-center shadow-md p-2">
                                            We are always ready to help you
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="text-center font-semibold text-xl mt-2">
                                            Our dedicated team is committed to providing exceptional service and support for all your business needs. Whether you have questions, require guidance, or need immediate assistance, we are here for you.
                                        </p>
                                    </div>
                                    <NavLink to="/contact">
                                        <div className="text-center mt-8">
                                            <button className="px-6 py-3 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out">
                                                Contact Us
                                            </button>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            {/* Catagory section */}
                            <div className="w-full md:mt-64 mt-10 rounded ">
                               <div className="bg-green-600 text-white text-xl font-semibold px-2 py-4">
                                   Categories
                               </div>
                            <ul className="space-y-6 bg-gray-100 p-3 border">
                              {BlogsCatagories.map((category, index) => (
                                <li key={index} className="flex items-center text-xl ">
                                  <span className="font-bold text-xl mx-2 mr-2">✓</span>
                                  <NavLink to={category.link} className="text-black">
                                    {category.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Recent Blog Section */}
                               <div className="border w-full md:mt-46 mt-10  py-4 space-y-8 bg-gray-100">
                                   <div className='p-2 border flex  mx-2 shadow-md bg-white'>
                                       <h1 className='text-xl font-semibold text-black '>Recent Blogs</h1>
                                   </div>

                                   <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white     shadow-md rounded-xl'>
                                      <img src="/modernbusinessblog.png" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
                                      <div className='flex flex-col'>
                                        <h2 className=''>How To Start Modern Business</h2>
                                        <span className='text-sm text-gray-500 mt-2 '>10th September 2024</span>
                                      </div>
                                    </div>

                                    <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white     shadow-md rounded-xl'>
                                      <img src="/modernbusinessblog.png" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
                                      <div className='flex flex-col'>
                                        <h2 className=''>How To Start Modern Business</h2>
                                        <span className='text-sm text-gray-500 mt-2 '>10th September 2024</span>
                                      </div>
                                    </div>

                                    <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white     shadow-md rounded-xl'>
                                      <img src="/modernbusinessblog.png" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
                                      <div className='flex flex-col'>
                                        <h2 className=''>How To Start Modern Business</h2>
                                        <span className='text-sm text-gray-500 mt-2 '>10th September 2024</span>
                                      </div>
                                    </div>
                               </div>

                               {/* social media */}
                               <div className='border w-full md:mt-46 mt-10  py-4 space-y-8 bg-gray-100'>
                                    <div className='p-2 border flex  mx-2 shadow-md bg-white'>
                                       <h1 className='text-xl font-semibold text-black '>Social Media</h1>
                                   </div>
                                   <div className='grid grid-cols-2 gap-2 p-2'>
                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <FaFacebook className='text-2xl mx-2'/>
                                             <span>Facbook</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <FaYoutube className='text-2xl mx-2'/>
                                             <span>Youtube</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <FaLinkedin className='text-2xl mx-2'/>
                                             <span>Linkedin</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <FaWhatsappSquare className='text-2xl mx-2'/>
                                             <span>WhatsApp</span>
                                             </button>
                                           </div>
                                    </div>

                               </div>
                        </div>                   
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
