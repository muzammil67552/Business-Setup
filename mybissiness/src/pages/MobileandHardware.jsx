/* eslint-disable react/no-unescaped-entities */
import  { useState, useEffect } from 'react'; // Make sure this is included
import CatagoriesService from '../components/CatagoriesService';
import { NavLink } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Modal from '../components/Modal';

const MobileandHardware = () => {
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
        <img src="/Mobile Hardwere and Softere/mobile hardwere banner.jpg" className="w-full h-full" alt="Banner" />
        {/* Heading to appear on image hover */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out text-center">
              Mobile Software & Hardware Services in Oman - PETAC Paracha Enterprise Trade and Consultants
          </h1>
        </div>
      </div>
      
      <div className="bg-white px-4 md:px-16 lg:px-36 md:mt-24 mt-24">
        {/* Categories Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <CatagoriesService/>

          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <img src="/Mobile Hardwere and Softere/service mob and hard.png" className="h-5/6 w-full md:m-0 -ml-2" alt="Hero" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto gap-6 flex flex-col md:flex-row">
          <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
            <h1 className="md:text-5xl text-3xl font-semibold"> Why Choose PETAC for Mobile Software & Hardware Services?</h1>
            <p className="mt-10 text-gray-700 text-xl">
            At PETAC, we understand that both software and hardware play pivotal roles in the success of mobile technologies. Our team of experienced professionals offers end-to-end mobile solutions, ensuring seamless integration, reliable performance, and long-term sustainability. We combine our technical knowledge with in-depth industry insights to deliver innovative, scalable, and cost-effective solutions for businesses of all sizes.
            </p>
            <p className="mt-10 text-gray-700 text-xl">
            Our services include everything from mobile app development and software optimization to hardware procurement and installation, ensuring that your mobile devices and solutions meet the highest standards of performance.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Mobile Software Services We Offer:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Custom Mobile App Development:</span>
            Our mobile app development services are tailored to meet the unique needs of your business. Whether you require iOS, Android, or cross-platform applications, our team builds powerful, user-friendly apps designed to boost your business operations. We specialize in building mobile solutions for industries including e-commerce, logistics, healthcare, and more. Our apps are built with a focus on scalability, performance, and security.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Mobile Application Maintenance & Support:</span>
            PETAC provides ongoing maintenance and support services for mobile applications, ensuring that your software stays up-to-date with the latest security protocols, bug fixes, and performance enhancements. We monitor your app’s performance, troubleshoot issues, and make necessary updates, ensuring that your users have a seamless experience.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Mobile UI/UX Design:</span>
            A great mobile app is built on an intuitive user interface (UI) and user experience (UX). Our design team works closely with clients to create visually appealing and highly functional mobile apps that engage users and enhance customer satisfaction. Our UI/UX designs are built with the latest industry trends, ensuring your app stands out in a competitive market.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Enterprise Mobile Solutions:</span>
            For large enterprises, we offer comprehensive mobile solutions, including mobile workforce management, customer relationship management (CRM) systems, and enterprise resource planning (ERP) tools. These solutions are designed to streamline your operations, improve team collaboration, and increase overall productivity.

            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Mobile Software Integration:</span>
            Whether you are integrating mobile software into your existing systems or creating a new mobile ecosystem for your business, PETAC ensures seamless integration. We help businesses integrate mobile apps with their databases, cloud platforms, CRM systems, and more, providing a unified solution that enhances efficiency and workflow. 
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Mobile App Testing:</span>
            Our mobile app testing services ensure that your application performs flawlessly across all devices and operating systems. We perform thorough testing for functionality, security, and usability, ensuring that your app is free from bugs, secure from threats, and provides an excellent user experience.
            </p>


            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Mobile Hardware Services We Offer:</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Mobile Device Procurement:</span>
            PETAC helps businesses source and procure mobile devices tailored to their specific needs. Whether you need smartphones, tablets, or rugged devices for industrial use, we provide high-quality mobile hardware at competitive prices. We work with top brands to ensure your team is equipped with the best devices to meet the demands of your business.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Mobile Device Setup & Configuration:</span>
            Once you have the hardware, PETAC ensures proper setup and configuration for optimal performance. We handle everything from software installations, security configurations, device management systems, and more, making sure your devices are ready for immediate use.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Mobile Device Management (MDM):</span>
            Managing multiple mobile devices across an organization can be challenging. PETAC offers Mobile Device Management (MDM) solutions to help businesses monitor, manage, and secure their devices. Whether you need to deploy updates, track device usage, or enforce security protocols, our MDM services ensure your devices remain compliant with industry standards.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">Mobile Hardware Repairs & Maintenance:</span>
            In addition to setup and procurement, PETAC offers repair and maintenance services for mobile devices. Whether it's a cracked screen, faulty hardware, or a software issue, our team of technicians is equipped to handle a wide range of problems. We offer both on-site and off-site repair services to minimize downtime for your business.

            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">5.
            <span className="text-xl font-semibold mx-2">Mobile Security Solutions:</span>
            Protecting your mobile devices from threats is essential in today’s digital environment. PETAC provides robust mobile security solutions, including anti-virus installations, data encryption, remote wiping capabilities, and more. We ensure that your devices and data are safe from cyber threats, both within your organization and in the hands of your employees.
            </p>
            <p className="md:mt-4 mt-2 text-gray-700 text-xl space-y-2 md:mx-12 space-x-2">6.
            <span className="text-xl font-semibold mx-2">Mobile Device Upgrades:</span>
            Technology evolves quickly, and staying up to date with the latest hardware can give your business a competitive edge. PETAC offers upgrade services for your existing mobile devices, ensuring that you always have access to the latest features and performance enhancements.
            </p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Why Partner with PETAC for Mobile Solutions?</h1>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Customized Solutions:</span>
            Every business is unique, and so are your mobile requirements. PETAC tailors its services to meet the specific needs of your industry, ensuring that you get the most out of your mobile solutions.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">2.
            <span className="text-xl font-semibold mx-2">Expert Technical Team:</span>
            Our team of skilled developers and technicians has years of experience in the mobile technology field, ensuring that you receive cutting-edge solutions that enhance efficiency and performance.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">3.
            <span className="text-xl font-semibold mx-2">Full-Service Provider:</span>
            From mobile software development to hardware procurement and maintenance, PETAC offers a complete suite of mobile services under one roof, making us your go-to partner for all your mobile technology needs.
            </p>
            <p className="mt-8 text-gray-700 text-xl  space-y-2 md:mx-12">4.
            <span className="text-xl font-semibold mx-2">Long-Term Partnership:</span>
            At PETAC, we’re invested in your long-term success. Our mobile solutions are designed with scalability in mind, ensuring that your mobile infrastructure grows with your business.
            </p>         
            {/* Contact Us */}
            <p className="text-gray-700 text-xl mt-10">
            Ready to upgrade your mobile infrastructure or develop custom mobile applications for your business? Contact <span className='font-bold'>PETAC</span> Paracha Enterprise Trade and Consultants today and let us help you harness the power of mobile technology to drive your business forward.
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

export default MobileandHardware; // Ensure the export statement is at the top level
