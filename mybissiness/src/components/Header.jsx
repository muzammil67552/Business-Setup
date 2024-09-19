import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 h-4">
        
        {/* Email Section (hidden on mobile, visible on md and lg screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <FaEnvelope />
          <span className="text-sm">info@example.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex md:space-x-4 space-x-2">
          <FaFacebook className="hover:text-blue-500 cursor-pointer h-6 w-6" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer h-6 w-6" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer h-6 w-6" />
          <FaLinkedin className="hover:text-blue-600 cursor-pointer h-6 w-6" />
          <FaWhatsapp className="hover:text-green-500 cursor-pointer h-6 w-6" />
        </div>

        {/* Language Selection */}
        <div className="flex space-x-4">
          <span className="cursor-pointer hover:text-gray-400">English</span>
          <span className="cursor-pointer hover:text-gray-400">العربية</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
