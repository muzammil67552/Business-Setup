import  { useState, useEffect } from 'react'; // Make sure this is included
import CatagoriesService from '../components/CatagoriesService';
import { NavLink } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const Carpentry = () => {
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
      <div className="relative md:h-96 w-full md:mt-28 page-top group ">
        <img src="/Carpentery/carpenter banner.jpg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          Carpentry and Workshop Consulting Services in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>

          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Carpentery/Carpentry Service.jpg" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold"> Carpentry and Workshop Consulting Services in Oman - PETAC Paracha Enterprise Trade and Consultants</h1>
            <p className="mt-10 text-gray-700 text-xl">
            At PETAC Paracha Enterprise Trade and Consultants, we offer specialized consulting services for the carpentry and workshop industries in Oman. Our consulting is designed to help businesses set up and optimize their carpentry and workshop operations, ensuring smooth compliance with local regulations, cost-effective production, and efficient workflow management. Whether you are starting a new carpentry business or looking to expand an existing workshop, we provide expert guidance at every step.
            </p>
            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Carpentry and Workshop Consulting Services We Offer:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Business Setup & Licensing Support:</span>
            Navigating the legal and licensing requirements in Oman is essential for running a carpentry or workshop business. PETAC provides guidance on the full setup process, helping you secure the necessary licenses and permits to operate in compliance with Omani regulations. This includes registering your business, obtaining industrial licenses, and meeting safety standards.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Workshop Design & Layout Planning:</span>
            A well-organized workshop is crucial to productivity. We assist you in designing and planning the optimal layout for your carpentry or workshop space, ensuring an efficient flow of materials, tools, and workers. Whether you are building a workshop from scratch or upgrading an existing facility, we help you make the best use of your space for maximum operational efficiency.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Equipment & Material Sourcing:</span>
            One of the keys to a successful carpentry or workshop business is sourcing the right materials and equipment. PETAC offers advice on selecting the best tools, machinery, and materials for your operations. We help you connect with reputable suppliers in Oman and abroad, ensuring that you have access to high-quality resources at competitive prices.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Operational Efficiency Consulting:</span>
            Once your workshop is up and running, optimizing its efficiency becomes a priority. Our consultants review your current processes and identify areas where productivity can be improved. We focus on workflow optimization, time management, and reducing waste, helping you increase output while minimizing operational costs.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Regulatory Compliance & Safety Standards:</span>
            The carpentry and workshop industries must adhere to strict health and safety regulations in Oman. PETAC helps you navigate these regulations, ensuring that your business complies with all safety standards and environmental laws. This includes advising on protective gear, machinery safety protocols, and workplace hazard mitigation.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Cost Management & Financial Planning:</span>
            Managing costs is critical to the long-term success of your carpentry or workshop business. We provide consulting services that focus on cost-effective production methods, resource management, and financial planning. Our experts help you create a budget that ensures profitability while maintaining quality in your operations.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Sustainability Consulting:</span>
            With the growing demand for sustainable practices in the woodworking industry, PETAC provides consulting on how to implement eco-friendly practices in your carpentry business. From sourcing sustainable wood to minimizing waste in your workshop, we help you adopt green strategies that align with international standards.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Branding & Marketing Strategy:</span>
            Building a strong brand in the carpentry or workshop business can set you apart from the competition. PETAC provides guidance on developing a marketing strategy that highlights your unique selling points and attracts new customers. We assist with branding, online marketing, and customer acquisition, helping your business grow its presence in Oman.
            </p>


            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Industries We Consult:</h1>

            <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Residential & Commercial Carpentry</span>
               Whether you specialize in residential or commercial carpentry, PETAC offers tailored consulting services that address the specific needs of your target market, from custom furniture production to large-scale commercial projects.
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Furniture Manufacturing Workshops</span>
               For furniture manufacturers, our consulting services cover everything from product design to streamlining your production processes and ensuring timely delivery to clients.
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Woodworking Shops</span>
               Woodworking shops face unique challenges in sourcing materials and managing custom orders. PETAC helps you optimize your woodworking operations for efficiency and profitability.
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Industrial Carpentry Workshops</span>
               Large industrial carpentry operations require careful planning and management. We offer consulting services that help industrial workshops scale production while maintaining quality and safety.
           </li>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Our Consulting Process:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2"> Initial Business Evaluation:</span>
            Based on our assessment, we develop a tailored strategy that aligns with your business objectives. Whether you need help with market entry, production planning, or regulatory compliance, our team provides actionable insights to drive your business forward.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Strategic Planning:</span>
            Based on the initial evaluation, we work with you to develop a customized plan that aligns with your business goals. Whether it’s setting up a new workshop or improving an existing one, we create a roadmap to guide you through the process.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Implementation & Support:</span>
            Once the strategy is in place, PETAC provides hands-on support throughout the implementation phase. We work alongside your team to ensure smooth execution, from installing machinery to training workers and ensuring compliance with safety regulations.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2"> Continuous Improvement:</span>
            Once the strategy is in place, PETAC provides hands-on support throughout the implementation phase. We work alongside your team to ensure smooth execution, from installing machinery to training workers and ensuring compliance with safety regulations.
            </p>                 
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            Ready to set up or improve your carpentry or workshop business in Oman? Contact <span className='font-bold'>PETAC </span>Paracha Enterprise Trade and Consultants today to schedule a consultation. Our team of experts is here to guide you through every step of the process and ensure your business thrives in Oman’s competitive market.
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

export default Carpentry; // Ensure the export statement is at the top level
