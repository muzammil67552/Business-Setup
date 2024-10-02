import { NavLink } from "react-router-dom";

const CalculatContact = () => {
    return (
        <div className="flex md:flex-row flex-col md:mt-32  -mb-10 md:gap-10 gap-2 justify-center">
          <NavLink to="/calculated-form">
            <button className="container flex justify-center md:text-3xl font-bold text-xl md:py-4 py-3 md:px-20 px-16 gap-5    overflow-hidden  bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white  shadow-lg hover:shadow-2xl duration-500 ease-in-out">
              Get Consulting Now
            </button>
          </NavLink>

          <NavLink to="/contact">
            <button className="container flex justify-center md:text-3xl font-bold text-xl md:py-4 py-3 md:px-20 px-16 gap-5    overflow-hidden  bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg transition-transform transform hover:scale-110 hover:bg-white  shadow-lg hover:shadow-2xl duration-500 ease-in-out">
              Contact Us
            </button>
          </NavLink>
        </div>
    );
};

export default CalculatContact;