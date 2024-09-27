import Contact from "../components/Contact";
import {  FaWhatsappSquare, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing icons from react-icons
import { FaArrowAltCircleRight } from "react-icons/fa"; // Importing the arrow icon

// Dummy data for team members
const teamMembers = [
  {
    name: "Mr: Mr: Umair Paracha",
    designation: "Board Chairman",
    image: "/asifprofile.jpg",
    socialLinks: {
      Facebook: "#",
      Instagram: "#",
      WhatsappSquare: " https://wa.me/96895259310",
    },
  },
  {
    name: "Mr: SaifUllah Mahmmod",
    designation: "Partner",
    image: "/New Linkidn profile pic.png",
    socialLinks: {
      Facebook: "#",
      Instagram: "#",
      WhatsappSquare: "https://wa.me/96895259360",
    },
  },
  {
    name: "Umer Feroz",
    designation: "Partner",
    image: "/testimonial 3.jpg",
    socialLinks: {
      Facebook: "#",
      Instagram: "#",
      WhatsappSquare: "https://wa.me/96877148859",
    },
  },
];

const AboutUs = () => {
  return (
    <div className="p-6 mt-44">
      {/* Section Heading */}
      <h2 className="md:text-5xl text-3xl font-semibold text-center mb-10 text-gray-800 hover:transition duration-300 cursor-pointer">
        Our Team
      </h2>

      {/* Cards Container */}
      <div className="flex justify-center items-center flex-wrap gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-80 md:w-96 lg:w-96"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="md:text-xl text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.designation}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={member.socialLinks.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href={member.socialLinks.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href={member.socialLinks.WhatsappSquare}
                  target="_jump"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <FaWhatsappSquare size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" lg:px-14 max-w-screen-2xl mx-auto min-h-screen md:mt-24 mt-10 ">
        <div className="border-b shadow-md w-full md:text-left px-4 mb-6 pb-4">
          <h1 className="md:text-5xl text-2xl font-semibold text-gray-800">
            GER 100% FOREIGN OWNERSHIP COMPANY REGISTERED IN OMAN.
          </h1>
          <p className="md:text-2xl text-xl md:mt-10 mt-4">
            Get your Investor Residence Visa (1 year - 2 Years - 5 Years or 10 years) Contact our Expert consultants.
          </p>
          <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 md:mt-10 mt-6 w-full">
            The benefit of Oman Commercial Registration
          </h2>
           <br/>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             100% Foreign Ownership
          </p>
          <p className="md:text-2xl text-xl md:mt-4 mt-2 flex items-center mx-4 w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             No Omani Partner Required
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Multiple business activities
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Chamber of Commerce members
          </p>
                <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Long-term residency
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
            Eligible investor visa 1 To 10
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Sponsor your family
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Company bank account
          </p>
             <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Tax registration
          </p>
        </div>

         <div className="border-b shadow-md w-full md:text-left px-4 mb-6 pb-4 md:mt-20 mt-10">
             <h1 className="md:text-5xl text-2xl font-semibold text-gray-800">
                 Expert Services:
             </h1>
             <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Local Sponsorship
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             LLC License Formation
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Investor company Formation
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Pro Service
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Oman Visa Clearance
          </p>
          <p className="md:text-2xl md:mt-4 mt-2 flex items-center mx-4 text-xl w-full">
            <FaArrowAltCircleRight className="text-green-500 mr-2" /> 
             Feel Freely Contact Us
          </p>
         </div>
      </div>
           <Contact/>
    </div>
  );
};

export default AboutUs;
