/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import { NavLink } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';
import CatagoriesService from '../components/CatagoriesService';

const CompanyReg = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // Show modal after 10 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  const closeModal = () => setShowModal(false);

  return (
    <> 
      
      {/* Banner Section */}
      <div className="relative h-64 md:h-96 w-full page-top group">
        <img src="/Company Formation/company formation banner.jpg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
            Get Company Registration And Formation In Oman
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
             <CatagoriesService/>
            {/* Content image */}
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Company Formation/company  formation.jpg" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold">PETAC: Your Go-To for Business Consulting and Legal Document Services in Oman</h1>
            <p className="mt-10 text-gray-700 text-xl">
              When it comes to business consulting and legal document services in Oman, PETAC is a trusted partner for both local and international entrepreneurs. Whether you're looking to set up a new company or expand an existing one, our team offers expert guidance and support throughout the process. We specialize in making business setups seamless by providing comprehensive legal services, helping you navigate the complexities of Oman's regulatory landscape with ease. At PETAC, we focus on efficiency, ensuring your business operations are established without unnecessary delays or obstacles.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Our Services: Tailored Solutions for Business Success</h1>
            <p className="text-gray-700 text-xl mt-10">
              Curious about what we can do for you? PETAC offers a range of services designed to meet the needs of businesses at every stage of their journey. From company formation and legal document preparation to financial consultation and ongoing compliance management, our services are customized to suit your business needs. We simplify what can often seem like a complicated process, ensuring you can focus on your core business operations while we handle the paperwork and legalities. Let us take care of the details, so you can concentrate on growing your business.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Easy Company Registration in Oman: Your Business, Our Expertise</h1>
            <p className="mt-10 text-gray-700 text-xl">
              Starting or expanding a business in Oman involves navigating several legal and regulatory requirements, which can be overwhelming without the right expertise. That’s where PETAC comes in. We specialize in simplifying the company registration process, ensuring that everything is handled efficiently and correctly. Our team offers step-by-step assistance, from gathering the necessary documentation to submitting it to the relevant authorities. Whether you're a startup or an established business, we ensure the entire process is seamless, so you can begin operating in Oman as quickly as possible. Our goal is to remove the hassle, making it easy for you to get started.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">How Long Does It Take to Register a Company and Open a Bank Account in Oman?</h1>
            <p className="mt-10 text-gray-700 text-xl">
              One of the most common questions we get is how long it takes to fully establish a business in Oman. Generally, the time required to register a company can vary, depending on the type of business you're setting up and how quickly you can gather the required documents. On average, the process can take between 2 to 6 weeks. However, with PETAC’s assistance, we aim to streamline this process, ensuring minimal delays and swift approvals.
              <br />
              After your company is successfully registered, the next step is to open a corporate bank account, which is equally crucial for conducting business in Oman. The process of opening a bank account usually takes an additional 2 to 4 weeks, depending on the bank’s internal procedures and specific requirements. PETAC manages this entire process for you, liaising with local banks and ensuring all documentation is in order, so you can focus on running your business while we take care of the administrative work.
            </p>

            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            At <span className="font-bold">PETAC</span>, we understand that setting up a business in a foreign country can be complex. Our dedicated consultants are here to guide you through each step of the LLC formation process, ensuring that your business gets off to a smooth start.Contact us today to schedule a consultation and take the first step toward establishing your LLC in Oman.
            </p>
          </div>
        </div>

        <TestimonialSlider />

        <div className="flex md:flex-row flex-col md:mt-32 mt-16 md:gap-10 gap-2 justify-center">
          <NavLink to="/calculated-form">
            <button className="md:text-3xl text-2xl md:px-24 w-full overflow-hidden md:py-3 py-2 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-500 ease-in-out">
              Get Consulting Now
            </button>
          </NavLink>

          <NavLink to="/contact">
            <button className="md:text-3xl text-2xl md:px-24 w-full overflow-hidden md:py-3 py-2 bg-[#4CAF4F] text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white hover:text-[#4CAF4F] shadow-lg hover:shadow-2xl duration-500 ease-in-out">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        imageSrc="/Company Formation/comp Reg Modal.jpg"
      />
    </>
  );
}

export default CompanyReg; // Ensure the export statement is at the top level
