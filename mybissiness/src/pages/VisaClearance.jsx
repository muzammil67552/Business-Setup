/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import CatagoriesService from '../components/CatagoriesService';
import CalculatContact from '../components/CalculatContact';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const VisaClearance = () => {
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
        <img src="/Oman Visa Clearance/visa clearance banner.jpeg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          Visa Clearance in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>

          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Oman Visa Clearance/Oman-Visa-Services.jpeg" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold">Visa Clearance in Oman - PETAC Paracha Enterprise Trade and Consultants</h1>
            <p className="mt-10 text-gray-700 text-xl">
            Navigating the visa process in Oman can be complex, especially for businesses looking to hire expatriates or investors aiming to establish a presence in the country. PETAC Paracha Enterprise Trade and Consultants is here to simplify the entire visa clearance process, ensuring a hassle-free experience for companies, investors, and individuals alike.
            </p>
            <p className="mt-10 text-gray-700 text-xl">
            Our <span className="font-bold">Visa Clearance Services</span> are designed to streamline every step, from initial applications to final approvals, making sure all paperwork is in order and that you meet the requirements set forth by Omani immigration authorities. We cater to all visa categories, including employment, family, investor, and dependent visas, providing a comprehensive solution that keeps you legally compliant.        
            </p>
            
            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Visa Types We Specialize In:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Investor Visa for Company Formation:</span>
            Establishing a business in Oman requires securing an investor visa. Whether you're forming a Limited Liability Company (LLC) or an investor company, PETAC simplifies the process by ensuring all necessary documents—such as proof of investment, formation papers, and bank guarantees—are in place. We guide you through the visa application process, ensuring all approvals are obtained smoothly and without delays.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Employment Visa for Garments, Carpentry, and Mobile Software & Hardware Businesses:</span>
            For companies in industries like garments, carpentry, and mobile software and hardware, obtaining employment visas for expatriate workers is crucial. PETAC handles the entire process, from collecting documents to securing approvals from the Ministry of Labor and ROP. We ensure that your employees’ visas are processed efficiently, allowing your business to operate without unnecessary disruptions.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Professional Services (PRO) Visa:</span>
            As a business offering professional services, securing the right visa for your staff is essential. Whether your employees are PROs managing legal, governmental, or visa-related affairs, PETAC manages the visa application process from start to finish. We ensure all paperwork is submitted correctly and on time, making sure your team can perform their duties without legal complications.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Specialized Visa for Industry-Specific Services:</span>
            If your business operates in specialized sectors like carpentry, mobile software and hardware development, or other technical industries, PETAC provides tailored visa clearance services. We handle the complexities of obtaining work permits and visas for skilled labor, ensuring compliance with Omani immigration laws.


            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Family Visa for Business Owners and Investors:</span>
            Business owners and investors who wish to bring their families to Oman can rely on PETAC for family visa services. We ensure that all necessary documents, such as marriage and birth certificates, are attested and submitted correctly. PETAC liaises with immigration authorities to secure family visas without delays, enabling you to focus on your business while we manage the paperwork.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Dependent Visa for Employees:</span>
            Dependents of expatriates working in Oman, such as spouses and children, require specific visas. PETAC manages the dependent visa process, ensuring that your family members’ visas are processed efficiently and legally. We also assist with renewals and extensions, so your dependents’ statuses remain valid.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">7.
            <span className="text-xl font-semibold mx-2">Visit Visa for Business and Personal Purposes:</span>
            Whether for short-term business trips or personal visits, PETAC facilitates the issuance of visit visas. Our team ensures that all requirements are met promptly, making it easy for your visitors to enter Oman without issues. From document collection to final approval, we handle the entire process.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">PETAC’s Visa Clearance Process</h1>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 1: Initial Consultation: </span>
            Our process begins with a detailed consultation to understand your specific visa needs, whether for company formation, investor visas, employment, or professional services. We assess your documentation requirements and provide a clear roadmap to guide you through the process.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 2: Document Collection and Verification:</span>
            We collect all required documents, including passports, medical certificates, and proof of business formation or investment. PETAC’s experts carefully verify the authenticity of your documents to ensure they meet the standards set by Omani immigration authorities.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 3: Submission to Authorities:</span>
            Once verified, we submit your application to the relevant authorities, including the Ministry of Labor, ROP, and any other necessary government departments. PETAC ensures that all paperwork is accurate and complete, reducing the risk of delays or rejections.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 4: Regular Follow-Up and Status Updates:</span>
            Throughout the visa application process, PETAC keeps you informed with regular updates. We track the progress of your application and address any additional requirements that may arise, ensuring a smooth and timely approval process.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 5: Visa Issuance:</span>
            Once approved, we promptly deliver the issued visa to you. PETAC also assists with further steps such as arranging medical checks or fingerprinting, if necessary.
            </li>        
            <li className='md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2'>
            <span className='text-gray-600 text-xl mt-10'>Step 6: Ongoing Support for Renewals and Amendments:</span>,Even after visa issuance, PETAC continues to support you. We assist with any necessary renewals or amendments, ensuring your legal status in Oman remains compliant with immigration laws.          
            </li>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Choose PETAC?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Industry-Specific Expertise:</span>
            Our deep understanding of Omani immigration laws and industry-specific requirements allows us to provide tailored visa solutions for your business, ensuring compliance and efficiency.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Strong Government Relationships:</span>
            PETAC’s connections with Omani ministries and immigration authorities enable us to expedite visa applications and approvals, reducing wait times for your business.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Cost-Effective Solutions:</span>
            Outsourcing your visa clearance needs to PETAC eliminates the need for an in-house legal or HR team, saving time and resources while ensuring accuracy.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2">Customized Services:</span>
            Whether you're forming a company, hiring expatriate workers, or seeking investor visas, our services are customized to meet the unique needs of your business.
            </p>    
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            At <span className='font-bold'>PETAC</span> Paracha Enterprise Trade and Consultants, we make the visa clearance process in Oman simple and stress-free. Let our experts handle the paperwork, so you can focus on your business growth. Contact us today to learn more about how we can assist with all your visa clearance needs.
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

export default VisaClearance; // Ensure the export statement is at the top level
