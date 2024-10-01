/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import { Categories } from '../assets/ServiceCatagory';  
import { NavLink } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const ProService = () => {
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
        <img src="/Pro Services/pro banner.webp" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
          PRO Services in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12">
            <div className="bg-green-600 text-white text-xl font-bold px-2 py-4">
              Choose Our Service by Categories
            </div>
            <ul className="space-y-6 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li key={index} className="flex items-center text-xl font-medium">
                  <span className="font-bold text-xl mx-2 mr-2">✓</span>
                  <NavLink to={category.link} className="text-black">
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Pro Services/servicepro.webp" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold">PRO Services in Oman - PETAC Paracha Enterprise Trade and Consultants</h1>
            <p className="mt-10 text-gray-600 text-xl">
               Navigating Omani regulations is critical for running a successful business. This process often involves dealing with a wide range of government-related tasks, from visa applications to document attestation. PETAC provides <span className='font-bold'>PRO Services</span> (Public Relations Officer Services) that take care of all these legal formalities for you, ensuring your business remains compliant with local laws while freeing up your time to focus on core business operations.
               PRO Services include managing interactions with various government departments, obtaining necessary approvals, and ensuring compliance with regulations related to visas, licensing, and work permits. By choosing PETAC as your PRO partner, you’re assured of a seamless experience in managing government-related procedures, saving you both time and operational costs.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Understanding PRO Services</h1>
            <p className="text-gray-600 text-xl mt-10">
               PRO Services handle essential business documentation and formalities that are required to set up and run a company in Oman. These services typically involve submitting applications, processing work visas, renewing licenses, and ensuring compliance with government regulations. PETAC offers a full suite of PRO Services tailored to meet the specific needs of your business, ensuring all formalities are dealt with efficiently.
            </p>
            <h1 className="md:text-5xl text-3xl font-semibold mt-10">Why PETAC for PRO Services?</h1>
            <p className="text-gray-600 text-xl mt-10">
            At PETAC, we pride ourselves on being experts in Omani regulations and legal requirements. Our team of skilled professionals is well-versed in dealing with the intricate processes involved in government paperwork, visa applications, labor cards, and more. Choosing PETAC for your PRO Services means you are partnering with a team that has deep knowledge of the local market and government procedures.We provide cost-effective PRO solutions by eliminating the need for a full-time in-house team. Outsourcing these tasks to PETAC ensures you only pay for the services you need, when you need them. We guarantee transparency and confidentiality throughout the entire process, providing regular updates and progress reports to keep you informed every step of the way.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Key PRO Services We Offer</h1>
            <p className="mt-8 text-gray-600 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Business Registration and Licensing :</span>
            Starting a business in Oman requires registration with various government entities, including the Ministry of Commerce, Industry, and Investment Promotion (MOCIIP). PETAC handles all aspects of this process, ensuring your company is legally established. We manage your initial company registration, renewal of your commercial registration, and all relevant trade licenses.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Visa and Immigration Support:</span>
            businesses in Oman. PETAC takes over this process, handling everything from applying for work visas for your employees to securing investor visas for business owners. We also manage family visas, ensuring expatriates can bring their loved ones to Oman without hassle. Our visa renewal services ensure all required documents are kept up-to-date, preventing any legal complications for your staff or business.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Labor Card Processing :</span>
            Any company employing foreign workers in Oman is required to secure labor cards for its employees. PETAC manages the entire process, including submitting applications, securing approvals, and renewing labor cards as needed. This ensures your business remains compliant with Omani labor laws, avoiding any potential fines or penalties.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Document Attestation and Clearance :</span>
            business activities in Oman, particularly when dealing with government contracts or international agreements. PETAC offers complete document attestation and clearance services, ensuring that your paperwork is certified and approved by relevant authorities. We work with the Ministry of Foreign Affairs (MOFA), embassies, and other government entities to have your documents cleared, attested, and notarized.


            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Ministry Approvals and No Objection Certificates (NOCs) :</span>
            Certain industries, such as construction, healthcare, and education, require additional ministry approvals or No Objection Certificates (NOCs). PETAC helps you obtain these approvals, ensuring your business can operate legally in specialized sectors. We maintain strong relationships with various Omani ministries, allowing us to expedite the process and secure necessary approvals on your behalf.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">License Renewals and Amendments  :</span>
            Keeping your business licenses current is critical to maintaining your operations. PETAC manages the entire renewal process, ensuring that your trade and municipal licenses are renewed on time. If your business undergoes changes, such as adding new activities or updating shareholder information, we also handle all necessary amendments to your licenses.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">7.
            <span className="text-xl font-semibold mx-2">Municipality and Chamber of Commerce Support:</span>
            Businesses in Oman are required to register with local municipalities and the Chamber of Commerce. PETAC takes care of these formalities by handling all applications and paperwork needed for your business to operate smoothly. We ensure your company remains in good standing with local authorities, allowing you to focus on running your business without interruptions.


            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">8.
            <span className="text-xl font-semibold mx-2">PRO Services for Free Zones :</span>
            Businesses operating in Oman's free zones, such as Duqm or Sohar, require specialized PRO Services tailored to these specific jurisdictions. PETAC provides comprehensive free zone registration services, visa processing, and all other relevant PRO tasks, ensuring your company meets the unique requirements of these zones.
            </p>

            <h1 className="md:text-5xl text-3xl font-semibold mt-10">The PETAC PRO Service Process</h1>
            <li className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 1: Consultation and Assessment: </span>
            Our process begins with an initial consultation to understand your specific business needs. Whether you are starting a new business, expanding, or require assistance with ongoing operations, we assess your requirements and provide a tailored PRO Services package.
            </li>
            <li className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 2: Document Collection and Preparation:</span>
            We collect all necessary documents, including passports, visa applications, and business licenses. Our team ensures all paperwork is in order, reducing the likelihood of delays.
            </li>
            <li className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 3: Submission to Authorities:</span>
            PETAC submits the necessary applications to the relevant government departments. Our team maintains close relationships with various ministries, allowing us to expedite the process and secure approvals in a timely manner.
            </li>
            <li className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 4: Follow-Up and Completion:</span>
            We track the progress of your applications and provide regular updates. Once approvals are received, we complete the process by delivering the necessary documents and ensuring all legal requirements have been met.
            </li>
            <li className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">
            <span className="text-xl font-semibold mx-2">Step 5: Renewal and Ongoing Support:</span>
            PETAC continues to support your business by managing renewals and any additional government processes. Our team ensures that your licenses, visas, and other documents are kept up-to-date, so your business can continue to operate smoothly.
            </li>
          
            <p className="text-gray-600 text-xl mt-10">
            <span className='font-bold'>At PETAC Paracha Enterprise Trade and Consultants</span>, we are dedicated to simplifying the administrative burden of running a business in Oman. Our team of professionals ensures that your company remains compliant with all legal requirements, allowing you to focus on growing your business. Contact us today to learn more about how our PRO Services can benefit your business in Oman.
            </p>
            
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-3/12">
            <div className="rounded-xl shadow-xl text-white font-semibold md:mt-0 mt-6 bg-[#4CAF4F]">
              <div className="p-10">
                <div>
                  <h1 className="text-4xl font-semibold text-center shadow-md p-4">We are always ready to help you</h1>
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

export default ProService; // Ensure the export statement is at the top level
