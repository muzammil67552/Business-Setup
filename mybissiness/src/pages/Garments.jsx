import  { useState, useEffect } from 'react'; // Make sure this is included 
import CalculatContact from '../components/CalculatContact';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';
import CatagoriesService from '../components/CatagoriesService';

const Garments = () => {
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
        <img src="/Garments/garments banner.jpg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          Garments Services in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Garments/service garments.png" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold"> Why Choose PETAC for Mobile Software & Hardware Services?</h1>
            <p className="mt-10 text-gray-700 text-xl">
            At PETAC Paracha Enterprise Trade and Consultants, we specialize in providing premium garments solutions that cater to the growing needs of businesses and individuals in Oman. With an extensive understanding of the garments industry, we offer a range of services that help streamline production, enhance quality, and drive business growth. Whether you are a startup looking to establish a garments manufacturing unit or an established brand seeking efficient production and distribution, PETAC is here to support your garments business journey.
            </p>
            <p className="mt-10 text-gray-700 text-xl">
            Our garments services are tailored to meet the unique demands of each client. From sourcing high-quality materials to production and distribution, we offer end-to-end solutions that ensure your garments business thrives in a competitive market.
            </p>7
            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Garments Consulting Services We Offer:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Market Research & Feasibility Studies:</span>
            Understanding the garments industry in Oman is critical to the success of your business. PETAC conducts in-depth market research and feasibility studies to provide you with a clear picture of the demand, competition, and potential growth areas in the Omani market. We help you assess the viability of your business idea and develop strategies that ensure success.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Regulatory Compliance & Licensing Guidance:</span>
            Starting a garments business in Oman requires adherence to local regulations and licensing requirements. Our consultants guide you through the entire process of registering your business, obtaining necessary licenses, and ensuring compliance with labor, import/export, and environmental laws specific to the garments industry.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Supplier & Manufacturer Identification:</span>
            Finding reliable suppliers and manufacturers is key to any garments business. PETAC helps you identify and connect with trustworthy suppliers and manufacturers in Oman and internationally, ensuring you have access to high-quality materials and production capabilities.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Garments Production Strategy:</span>
            For businesses looking to set up production facilities in Oman, we provide strategic advice on establishing efficient and cost-effective manufacturing processes. From sourcing materials to setting up production lines, PETAC ensures that your production is optimized for both quality and profitability.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Branding & Market Entry Strategies:</span>
            Entering the garments market in Oman requires a strong brand and a well-thought-out market entry strategy. PETAC assists you in developing your brand identity and creating a tailored market entry plan that positions your business for success in the competitive garments sector.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Consulting for Exporting Garments:</span>
            Oman’s strategic location provides excellent opportunities for exporting garments to the broader Middle East and beyond. Our consultants help you navigate the logistics, legal requirements, and trade regulations involved in exporting garments from Oman, ensuring a smooth and profitable export process.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Sustainability & Ethical Practices:</span>
            Sustainability is becoming increasingly important in the garments industry. PETAC provides guidance on implementing sustainable and ethical practices in your business, helping you reduce environmental impact, improve working conditions, and meet international sustainability standards.
            </p>


            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Industries We Consult:</h1>

            <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Fashion Brands</span>
               We work with fashion brands looking to enter or expand in Oman, providing consulting services that cover everything from sourcing fabrics to navigating market regulations and building a strong brand.s 
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Uniform Production</span>
               Businesses looking to produce uniforms for various industries rely on our consulting services to guide them through the process of setting up production lines, sourcing materials, and complying with local standards.
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Retailers & Wholesalers</span>
               Retailers and wholesalers looking to expand their garments offerings in Oman can benefit from our expert advice on sourcing, inventory management, and optimizing retail operations to maximize profitability.
           </li>
           <li className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">           
               <span className="text-xl font-semibold ">Export-Oriented Businesses</span>
               For businesses focused on exporting garments, PETAC offers consulting on the logistics, regulatory requirements, and international trade laws necessary to succeed in the export market.
           </li>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Our Consulting Process:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2"> Initial Consultation & Business Assessment:</span>
            Based on our assessment, we develop a tailored strategy that aligns with your business objectives. Whether you need help with market entry, production planning, or regulatory compliance, our team provides actionable insights to drive your business forward.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Implementation Support:</span>
            Once the strategy is finalized, we offer ongoing support during the implementation phase. Our consultants are on hand to assist with key decisions, supplier negotiations, and compliance checks to ensure your business runs smoothly.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Continuous Improvement:</span>
            As your business grows, we provide continuous consulting support to help you refine operations, explore new opportunities, and stay ahead of market trends.
            </p>         

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Partner with PETAC for Garments Consulting?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2"> Local Market Expertise:</span>
            Our deep understanding of Oman’s garments industry and business environment enables us to offer strategic advice that is both relevant and impactful.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Customized Consulting:</span>
            We recognize that every garments business is unique, which is why we offer fully customized consulting solutions that address your specific needs and objectives.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">End-to-End Support:</span>
            From market research to licensing and supplier identification, PETAC provides comprehensive consulting support throughout every stage of your garments business journey.
            </p>  
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2">Proven Track Record:</span>
            With a proven track record of helping businesses succeed in Oman’s garments industry, we are the trusted advisors you need to ensure your business thrives.
            </p>
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            Ready to take your garments business to the next level? Contact <span className='font-bold'>PETAC</span> Paracha Enterprise Trade and Consultants today for expert advice on setting up, growing, and optimizing your garments business in Oman. Our team of consultants is here to guide you every step of the way.
            </p>         
          </div>
        </div>

        <TestimonialSlider />
        <CalculatContact/>
      </div>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        imageSrc="/Company Formation/comp Reg Modal.jpg"
      />
    </>
  );
}

export default Garments; // Ensure the export statement is at the top level
