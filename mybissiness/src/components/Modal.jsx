import { NavLink } from 'react-router-dom'; 

// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, closeModal, imageSrc }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="relative bg-white p-5 rounded shadow-lg max-w-sm w-full page-top">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 text-2xl right-2 text-white hover:text-gray-800 bg-[#4CAF4F] transition-colors border p-3"
          aria-label="Close Modal"
        >
          &times; {/* Unicode character for "X" */}
        </button>

        {/* Modal Image */}
        <img src={imageSrc} alt="Service Image" className="w-full h-full object-cover rounded" />

        {/* Buttons Below the Image */}
        <div className="flex justify-between mt-2 gap-2">
          <NavLink
            to="/calculated-form" 
            className="btn-primary w-full "
            onClick={closeModal} 
          >
            Get Calculated
          </NavLink>
          <NavLink
            to="/contact" // Adjust the path based on your routing setup
            className="btn-primary w-full "
            onClick={closeModal} 
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Modal;
