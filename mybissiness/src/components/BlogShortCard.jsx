import { BlogsCatagories } from '../assets/ServiceCatagory'//data are fetch from assets/ServiceCatagory
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const BlogShortCard = () => {
    return (
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
                                  <NavLink to={category.link} className="text-gray-700">
                                    {category.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Recent Blog Section */}
                               <div className="border w-full md:mt-46 mt-10  py-4 space-y-8 bg-gray-100">
                                   <div className='p-2 border flex  mx-2 shadow-md bg-white rounded-lg'>
                                       <h1 className='text-xl font-semibold text-black '>Recent Blogs</h1>
                                   </div>
                                   <NavLink to="/blogs/business-setup-oman">                                 
                                    <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white shadow-md rounded-xl mt-5'>
                                      <img src="/Blogs Images/modernbusinessblog.png" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
                                      <div className='flex flex-col'>
                                        <h2 className='hover:text-red-800'>How To Start Modern Business</h2>
                                        <span className='text-sm text-gray-500 mt-2 '>10th September 2024</span>
                                      </div>
                                    </div>
                                    </NavLink>
 
                                     <NavLink to="/blogs/business-Foreigner-setup-oman">
                                    <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white shadow-md rounded-xl mt-5'>
                                      <img src="/Blogs Images/Comp Formation.jpg" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
                                      <div className='flex flex-col'>        
                                        <h2 className='hover:text-red-800'>Can Foreigners Start Business in Oman</h2>
                                        <span className='text-sm text-gray-500 mt-2 '>10th September 2024</span>
                                      </div>
                                    </div> 
                                    </NavLink>
                                    <div className='flex flex-row items-start mx-4 space-x-4 p-4 bg-white     shadow-md rounded-xl'>
                                      <img src="/Blogs Images/modernbusinessblog.png" className="rounded-xl h-20 w-20 object-cover" alt="Blog Thumbnail" />
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
                                             <a href='https://www.facebook.com/profile.php?id=61564869346567' target="__jump"><FaFacebook className='text-2xl mx-2'/></a>
                                             <span>Facbook</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <a href='https://www.youtube.com/channel/UC_ZBMmpDwjqNPbWlOsVh1Jw' target="__jump"><FaYoutube className='text-2xl mx-2'/></a>
                                             <span>Youtube</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <a href='https://www.linkedin.com/in/petac-petac-537285330/' target="__jump"><FaLinkedin className='text-2xl mx-2'/></a>
                                             <span>Linkedin</span>
                                             </button>
                                           </div>

                                           <div className='border p-2'>
                                             <button className='w-full py-2 bg-gray-500 text-white rounded hover:bg-[#4CAF4F] flex'>
                                             <a href='https://wa.me/96895259360' target="__jump"><FaWhatsappSquare className='text-2xl mx-2'/></a>
                                             <span>WhatsApp</span>
                                             </button>
                                           </div>
                                    </div>

                               </div>
                        </div>
    );
};

export default BlogShortCard;