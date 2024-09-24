import { Categories } from '../assets/ServiceCatagory';  
import { NavLink } from 'react-router-dom';

const CompanyReg = () => {
  return (
    <div className='bg-white px-4 md:px-16 lg:px-36 page-top'>
      {/* Categories Section */}
      <div className='container mx-auto gap-6 flex flex-col md:flex-row'>
        <div className='w-full md:w-3/12'>
          <div className='bg-green-600 text-white text-xl font-bold px-2 py-4'>
            Choose Our Service by Categories
          </div>
          <ul className='space-y-6 bg-gray-100 p-3 border'>
            {Categories.map((category, index) => (
              <li key={index} className='flex items-center text-xl font-medium'>
                <span className="font-bold text-xl mx-2 mr-2">✓</span>
                <NavLink to={category.link} className='text-black'>
                  {category.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-9/12 mt-6 md:mt-0 relative ml-2'>
          <img src='/home 3.jpg' className='h-5/6 w-full md:m-0 -ml-2' alt='Hero' />
        </div>
      </div>
      {/* Content Section */}
      <div className='container mx-auto gap-6 flex flex-col md:flex-row'>
           <div className='w-full md:w-9/12 mt-6 md:mt-0 relative ml-2'>
                <img src='/home 3.jpg' className='h-5/6 w-full md:m-0 -ml-2' alt='Hero' />
           </div>
             
           {/* Contact Us */}
           <div className='w-full md:w-3/12   '>
                  <div className=' rounded-xl shadow-xl text-white font-semibold  md:mt-0 mt-6 bg-[#4CAF4F]  h-5/6 '>
                   <div className="p-10">
                            <div className=''>
                                 <h1 className="text-4xl  font-semibold text-center shadow-md p-4">We are always ready to help you</h1>
                            </div>
                            <div>
                                 <p className='text-center font-semibold text-xl mt-2'>Our dedicated team is committed to providing exceptional service and support for all your business needs. Whether you have questions, require guidance, or need immediate assistance, we are here for you</p>
                            </div>
                            <NavLink to="/contact">
                            <div className='text-center mt-8 '>
                                <button className='px-6 py-3 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-300 ease-in-out'>Contact Us</button>
                            </div>
                            </NavLink>
                     </div>
                  </div>
           </div>

      </div>
    </div>
  );
};

export default CompanyReg;
