import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp,FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 h-4">
        
        {/* Email Section (hidden on mobile, visible on md and lg screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <FaEnvelope />
          <a href='mailto:petac160@gmail.com' target='__jump' className='text-base mb-1'>petac160@gmail.com</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex md:space-x-4 space-x-2">
          <a href='https://www.facebook.com/profile.php?id=61564869346567' target="__jump"> <FaFacebook className="hover:text-blue-500 cursor-pointer h-6 w-6" /></a>
          <a href='https://www.youtube.com/channel/UC_ZBMmpDwjqNPbWlOsVh1Jw' target="__jump"><FaYoutube className="hover:text-blue-400 cursor-pointer h-6 w-6" /></a>
          <a href='https://www.instagram.com/petac54' target="__jump"><FaInstagram className="hover:text-pink-500 cursor-pointer h-6 w-6" /></a>
          <a href='https://www.linkedin.com/in/petac-petac-537285330/' target="__jump"><FaLinkedin className="hover:text-blue-600 cursor-pointer h-6 w-6" /></a>
          <a href='https://wa.me/96895259360' target="__jump"><FaWhatsapp className="hover:text-green-500 cursor-pointer h-6 w-6" /></a>
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