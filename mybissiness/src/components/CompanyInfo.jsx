import { MdBeenhere } from "react-icons/md";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbBrandTeams } from "react-icons/tb";

const CompanyInfo = () => {
  return (
    <div className="container max-w-screen-2xl h-1/2 bg-gray-50 border-b md:px-24 px-6 md:mt-24 mt-10 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-20 m-auto">
        <div className="md:w-1/3">
          <h2 className="md:text-5xl text-3xl font-semibold text-neutralDGray mb-4 mt-20 mx-6 md:mx-0">
            Business Consultant In Oman
            <br />
            <span className="text-[#4CAF4F]">Get in Contact with PETAC! Feel Free</span>
          </h2>
          <p className="text-xl mx-6 md:mx-0">
            We and our team will be available for your help.
          </p>
        </div>

        <div className="md:w-1/2 mx-auto flex flex-col sm:flex-row sm:items-center justify-around gap-12 md:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mx-2">
            {/* First Card */}
            <div className="flex items-center gap-4 md:gap-6 border-b p-4 shadow-lg bg-white rounded-lg cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 duration-300">
              <BsFillPersonPlusFill className="text-4xl md:text-5xl text-[#4CAF4F]" />
              <div>
                <h4 className="text-2xl md:text-3xl text-[#4D4D4D]">100+</h4>
                <p className="text-base md:text-lg">Clients</p>
              </div>
            </div>

            {/* Second Card */}
            <div className="flex items-center gap-4 md:gap-6 border-b p-4 shadow-lg bg-white rounded-lg cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 duration-300">
              <TbBrandTeams className="text-4xl md:text-5xl text-[#4CAF4F]" />
              <div>
                <h4 className="text-2xl md:text-3xl text-[#4D4D4D]">150+</h4>
                <p className="text-base md:text-lg">Teams</p>
              </div>
            </div>

            {/* Third Card */}
            <div className="flex items-center gap-4 md:gap-6 border-b p-4 shadow-lg bg-white rounded-lg cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 duration-300">
              <MdBeenhere className="text-4xl md:text-5xl text-[#4CAF4F]" />
              <div>
                <h4 className="text-2xl md:text-3xl text-[#4D4D4D]">100+</h4>
                <p className="text-base md:text-lg">Project Completion</p>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="flex items-center gap-4 md:gap-6 border-b p-4 shadow-lg bg-white rounded-lg cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 duration-300">
              <MdOutlineSupportAgent className="text-4xl md:text-5xl text-[#4CAF4F]" />
              <div>
                <h4 className="text-2xl md:text-3xl text-[#4D4D4D]">100+</h4>
                <p className="text-base md:text-lg">Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
