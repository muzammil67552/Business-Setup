/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import CatagoriesService from '../components/CatagoriesService';
import CalculatContact from '../components/CalculatContact';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const LLCLicense = () => {
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
      <div className="relative h-64 md:h-96 w-full md:mt-36 page-top group">
        <img src="/LLC Lisence Formation/llc banner.png" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          LLC License and Formation in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/LLC Lisence Formation/LLC Licience.webp" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold">LLC License and Formation in Oman - PETAC Paracha Enterprise Trade and Consultants</h1>
            <p className="mt-10 text-gray-700 text-xl">
            At PETAC, we specialize in providing comprehensive LLC (Limited Liability Company) formation and licensing services in Oman. Our expert team ensures a seamless and hassle-free process, allowing you to focus on building your business while we handle the legal and administrative complexities. Here’s a step-by-step guide to establishing an LLC in Oman with PETAC:
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">What is an LLC in Oman?</h1>
            <p className="text-gray-700 text-xl mt-10">
            A Limited Liability Company (LLC) is one of the most popular business structures for foreign investors and local entrepreneurs in Oman. It allows individuals or companies to conduct commercial activities while limiting liability to their capital contribution. An LLC in Oman requires at least two shareholders and offers flexibility in business operations.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">LLC Formation Process: A Step-by-Step Guide</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Business Activity Selection:</span>
            The first step in forming an LLC is identifying the appropriate business activity or activities your company will undertake. Oman’s Ministry of Commerce and Industry (MOCI) requires you to specify the nature of your business to issue the relevant licenses. PETAC will help you choose the right category from a wide range of business activities to ensure compliance with Omani law.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Choosing a Trade Name:</span>
            Your company’s trade name is critical to its identity. PETAC assists in selecting a trade name that is unique, compliant with Omani regulations, and reflective of your business activities. We handle the entire process of verifying and registering the name with MOCI.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Local Sponsorship Requirement:</span>
            In Oman, forming an LLC requires at least 30% Omani ownership. PETAC offers comprehensive support in finding reliable local sponsors (Omani partners) to meet this legal requirement while protecting your business interests.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2 ">Drafting the Memorandum of Association (MOA):</span>
            The MOA is a crucial legal document that outlines the structure and operations of your LLC. Our legal experts at PETAC draft a customized MOA that adheres to Omani law, specifying details such as:
            
                 <li className='mt-10'>Business activities</li>
                 <li className='mt-10'>Shareholder details</li>
                 <li className='mt-10'>Capital contribution</li>
                 <li className='mt-10'>Profit and loss distribution</li>
                 <li className='mt-10'>Management structure</li>
        
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Registering the LLC with MOCI:</span>
            Once the MOA is ready, we proceed with the registration of your LLC with the Ministry of Commerce and Industry (MOCI). This includes submitting all necessary documents, including identification for shareholders, business plan, lease agreement, and more.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Capital Deposit:</span>
            Oman requires a minimum capital deposit to establish an LLC, which varies depending on your business activity. PETAC assists in opening a corporate bank account and guides you through the capital deposit process.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">7.
            <span className="text-xl font-semibold mx-2">Approval from Relevant Authorities:</span>
            Depending on the nature of your business, approvals may be required from various Omani government departments, such as:
                
                 <li className='mt-10'>Ministry of Environment</li>
                 <li className='mt-10'>Ministry of Health (for healthcare businesses)</li>
                 <li className='mt-10'>Ministry of Tourism (for hospitality businesses)</li>
            </p>
            
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">8.
            <span className="text-xl font-semibold mx-2">Obtaining the LLC License:</span>
            After all required approvals are in place, PETAC will help you obtain the LLC license from MOCI. The license allows your company to legally operate in Oman, and we ensure that all documentation is correctly filed to avoid delays.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">9.
            <span className="text-xl font-semibold mx-2">Commercial Registration (CR):</span>
            Once the LLC license is issued, your company must obtain a Commercial Registration (CR) certificate from MOCI. PETAC facilitates this step by ensuring that all requirements are met, including the payment of fees and submission of necessary documents.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">10.
            <span className="text-xl font-semibold mx-2">Commercial Registration (CR):</span>
            Once the LLC license is issued, your company must obtain a Commercial Registration (CR) certificate from MOCI. PETAC facilitates this step by ensuring that all requirements are met, including the payment of fees and submission of necessary documents.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">11.
            <span className="text-xl font-semibold mx-2">Tax Registration (TR):</span>
            Once your LLC is established, PETAC can assist with obtaining work visas and labor cards for foreign employees. We handle the submission of applications to the Ministry of Labor and ensure that all immigration requirements are fulfilled.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">12.
            <span className="text-xl font-semibold mx-2">Visa and Labor Card Processing:</span>
            Once the LLC license is issued, your company must obtain a Commercial Registration (CR) certificate from MOCI. PETAC facilitates this step by ensuring that all requirements are met, including the payment of fees and submission of necessary documents.
            </p>
            
            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Form an LLC in Oman?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Limited Liability Protection:</span>
            Shareholders are only liable for the amount they invest in the business.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Flexibility:</span>
            LLCs offer operational flexibility, allowing you to engage in a variety of business activities.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Foreign Ownership:</span>
            Foreign investors can own up to 70% of an LLC in Oman, making it an attractive option for international entrepreneurs.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2">Access to Oman's Booming Economy:</span>
            Oman offers a business-friendly environment, tax benefits, and access to global markets.
            </p>
             
            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Contact PETAC for LLC Formation in Oman</h1>
            <p className="text-gray-700 text-xl mt-10">
            At PETAC, we understand that setting up a business in a foreign country can be complex. Our dedicated consultants are here to guide you through each step of the LLC formation process, ensuring that your business gets off to a smooth start.Contact us today to schedule a consultation and take the first step toward establishing your LLC in Oman.
            </p>
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            <span className='font-bold'>At PETAC Paracha Enterprise Trade and Consultants</span>, we are dedicated to simplifying the administrative burden of running a business in Oman. Our team of professionals ensures that your company remains compliant with all legal requirements, allowing you to focus on growing your business. Contact us today to learn more about how our PRO Services can benefit your business in Oman.
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

export default LLCLicense; // Ensure the export statement is at the top level
