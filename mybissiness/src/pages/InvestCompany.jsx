/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import CalculatContact from '../components/CalculatContact';
import CatagoriesService from '../components/CatagoriesService';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const InvestCompany = () => {
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
      <div className="relative h-screen md:h-96 w-full md:mt-28 page-top group ">
        <img src="/Investor Company/banner invest.jpg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          Investor Company Formation in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Investor Company/Comp Formation.jpg" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold">Investor Company Formation in Oman - PETAC Paracha Enterprise Trade and Consultants</h1>
            <p className="mt-10 text-gray-700 text-xl">
            At PETAC, we offer specialized services for Investor Company Formation in Oman, providing tailored solutions to foreign investors looking to establish their presence in this dynamic and growing economy. Our Investor Company Formation service is designed to streamline the process, ensuring that investors can focus on their business goals while we manage the legal and regulatory requirements. Here's an in-depth look at how PETAC can help you establish your Investor Company in Oman:
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">What is an Investor Company in Oman?</h1>
            <p className="text-gray-700 text-xl mt-10">
            An Investor Company is a legal entity set up by foreign investors to conduct business activities in Oman. This structure allows for 100% foreign ownership in specific sectors, making it an attractive option for international entrepreneurs and companies seeking to invest in the Sultanate’s growing economy.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Choose PETAC for Investor Company Formation?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">100% Foreign Ownership:</span>
            The first step in forming an LLC is identifying the appropriate business activity or activities your company will undertake. Oman’s Ministry of Commerce and Industry (MOCI) requires you to specify the nature of your business to issue the relevant licenses. PETAC will help you choose the right category from a wide range of business activities to ensure compliance with Omani law.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">End-to-End Support:</span>
            Your company’s trade name is critical to its identity. PETAC assists in selecting a trade name that is unique, compliant with Omani regulations, and reflective of your business activities. We handle the entire process of verifying and registering the name with MOCI.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2"> . Local Market Insights:</span>
            We provide expert advice on industry-specific regulations, market opportunities, and investment incentives in Oman.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Benefits of Forming an Investor Company in Oman</h1>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Strategic Location: </span>
            Oman’s strategic position provides access to key markets in the Middle East, Africa, and Asia.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Tax Benefits:</span>
            Oman offers competitive tax rates and exemptions for specific industries.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Ease of Doing Business:</span>
            Oman's business-friendly regulations and economic incentives make it a desirable location for international investments.
            </li>
            <li className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Government Support: </span>
            The Omani government actively promotes foreign investments with supportive policies and streamlined procedures.
            </li>
            
            
            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">PETAC’s Investor Company Formation Process</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2"> Consultation and Business Activity Selection:</span>
            The first step in setting up an Investor Company is selecting the appropriate business activity. PETAC offers detailed consultations to help investors determine the best activity for their company, ensuring that it aligns with Oman’s legal requirements and market opportunities.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">  Investor Visa Application: </span>
            Before establishing an Investor Company, foreign investors must secure an Investor Visa. PETAC manages the entire visa application process, including the submission of required documents to Oman’s Ministry of Labor and Royal Oman Police (ROP) for approval.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2"> Trade Name Registration:</span>
            Choosing a unique and compliant trade name is crucial for establishing an Investor Company. PETAC will assist in selecting, verifying, and registering your trade name with the Ministry of Commerce, Industry, and Investment Promotion (MOCIIP).
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2">  Drafting the Articles of Association (AOA):</span>
            The Articles of Association (AOA) outline the ownership structure, management responsibilities, and operations of the Investor Company. PETAC’s legal team ensures the AOA is tailored to your specific needs while fully complying with Omani law.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">5.
            <span className="text-xl font-semibold mx-2">  Business Registration with MOCIIP:</span>
            Once the AOA is finalized, PETAC registers the Investor Company with the Ministry of Commerce, Industry, and Investment Promotion. We handle all paperwork, document submissions, and registration fees on your behalf.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">6.
            <span className="text-xl font-semibold mx-2">   Minimum Capital Deposit:</span>
            Investor Companies in Oman are required to deposit a minimum capital amount, which varies based on the sector and business activity. PETAC assists in opening a corporate bank account for your company, ensuring that the capital deposit is made in compliance with Omani regulations.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">7.
            <span className="text-xl font-semibold mx-2">  Tax and Regulatory Compliance:</span>
            Once your company is registered, it must be compliant with Oman’s tax regulations. PETAC assists in registering your Investor Company with the Tax Authority, ensuring proper filing of Corporate Income Tax, VAT (if applicable), and other regulatory obligations.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">8.
            <span className="text-xl font-semibold mx-2">  Investor Visa Renewal and Residency Permits:</span>
            PETAC offers ongoing support for the renewal of Investor Visas and residency permits for shareholders and employees. Our PRO services ensure timely submission of renewal documents, keeping your company compliant with immigration regulations.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Invest in Oman?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2"> Growing Economy:</span>
              Oman is rapidly diversifying its economy, offering numerous opportunities for investment in sectors like tourism, logistics, manufacturing, and technology.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Investment Incentives:</span>
            The Omani government provides attractive incentives for foreign investors, including tax exemptions and subsidies for select industries.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Stable Political Environment:</span>
            Oman is known for its political stability, which provides a secure environment for long-term investments.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2"> Free Trade Agreements:</span>
            Oman has a number of free trade agreements, offering access to lucrative markets in the GCC, the United States, and beyond.
            </p>
           
             
            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Contact PETAC Today for Investor Company Formation</h1>
            <p className="text-gray-700 text-xl mt-10">
            At PETAC, we make it easy for international investors to establish a successful business in Oman. Whether you’re looking to expand your operations into the Middle East or start a new venture, our dedicated team of consultants will guide you through every stage of the Investor Company Formation process.
            </p>
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            At <span className="font-bold">PETAC</span>, we make it easy for international investors to establish a successful business in Oman. Whether you’re looking to expand your operations into the Middle East or start a new venture, our dedicated team of consultants will guide you through every stage of the Investor Company Formation process.
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

export default InvestCompany; // Ensure the export statement is at the top level
