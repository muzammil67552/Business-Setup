import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PersonIcon from '@mui/icons-material/Person';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const CompanyInfo = () => {
  return (
    <div className=" container  lg:px-14 max-w-screen-2xl md:mx-auto h-1/2  md:mt-24 mt-10 bg-gray-50 border-b">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 
      m-auto pb-20">
        <div className="md:w-1/3">
          <h2 className="md:text-5xl text-3xl text-neutralDGray font-semibold mb-4 md:w:2/3 mt-20 md:mx-0 mx-6">
            Business Consultant In Oman<br />
            <span className="text-[#4CAF4F] ">Get in Contact with PETAC! Feel Free</span>
          </h2>
          <p className="text-xl md:mx-0 mx-6">We and our team will be available for your help.</p>
        </div>

        <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center gap-12 justify-around md:mt-20 ">
          <div className="space-y-8 grid grid-cols-2 sm:grid-cols-2 md:gap-8 gap-4 mx-10">
            {/* Repeated Section */}
            <div className="flex items-center gap-6 mt-6 border-b shadow-md mx-2 cursor-pointer hover:translate-x-3 hover:translate-y-3 duration-300">
              <PersonAddAlt1Icon className=' text-6xl font-bold text-[#4CAF4F]' />
              <div>
                <h4 className='text-3xl text-[#4D4D4D]'>500+</h4>
                <p className="text-lg">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-6 border-b shadow-md mx-2 cursor-pointer hover:translate-x-3 hover:translate-y-3 duration-300">
              <BeenhereIcon className='md:text-7xl text-6xl text-[#4CAF4F]' />
              <div>
                <h4 className='text-3xl text-[#4D4D4D]'>300+</h4>
                <p className="text-lg">Projects Completed</p>
              </div>
            </div>

            <div className="flex items-center gap-6 border-b shadow-md mx-2 cursor-pointer hover:translate-x-3 hover:translate-y-3 duration-300">
              <PersonIcon className='md:text-7xl text-6xl text-[#4CAF4F] ' />
              <div>
                <h4 className='text-3xl text-[#4D4D4D]'>200+</h4>
                <p className="text-lg">Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-6 border-b shadow-md mx-2 cursor-pointer hover:translate-x-3 hover:translate-y-3 duration-300">
              <SupportAgentIcon className='md:text-7xl text-6xl text-[#4CAF4F] h-10 w-4' />
              <div>
                <h4 className='text-3xl text-[#4D4D4D]'>150+</h4>
                <p className="text-lg">Consultants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
