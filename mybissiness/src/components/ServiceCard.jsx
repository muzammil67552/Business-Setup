import { NavLink } from "react-router-dom";
const ServiceCard = () => {

    const ServiceCards = [
       {
        id:1,
        title:"Providing trusted Company Registration  in Oman for seamless business operations and legal compliance",
        img:"/home 3.jpg",
        link:"/service/company-registration",
       },
       {
        id:2,
        title:"Streamline your Oman LLC formation with expert licensing assistance, ensuring a smooth business setup.",
        img:"/home 3.jpg",
        link:"/service/llc-license-formation",
       },
       
        {
        id:3,
        title:"Helping investors establish companies in Oman with comprehensive legal and financial guidance for success.",
        img:"/home 3.jpg",
        link:"/service/investor-company-formation",
       },
    
       {
        id:4,
        title:"Expert PRO services and visa clearance support, ensuring smooth business operations and employee management in Oman.",
        img:"/home 3.jpg",
        link:"/service/pro-service",
       },
       {
        id:5,
        title:"Comprehensive mobile software and hardware solutions, offering repairs, installations, and custom software services.",
        img:"/home 3.jpg",
        link:"/service/oman-visa-clearance",
       },
       {
        id:6,
        title:"Quality garment production and design services to meet your fashion needs, from concept to completion.",
        img:"/home 3.jpg",
        link:"/service/oman-visa-clearance",
       },
       {
        id:7,
        title:"Quality garment production and design services to meet your fashion needs, from concept to completion.",
        img:"/home 3.jpg",
        link:"/service/oman-visa-clearance"
       },
    ]
    return (
        <div className='px-4 md:px-20 max-w-screen-2xl mx-auto my-12 md:mt-32 mt-16'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className=' md:text-5xl text-2xl font-semibold mb-4'>Our Services That We Offer</h2>
                <p className='text-xl text-[#4D4D4D] mb-8 md:w-3/4 mx-auto'>We provide the best services in Oman with complete dedication and responsiveness. Our commitment ensures a prompt and reliable response to all customer needs.</p>
            </div>
            {/* here are ServiceCard */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 items-center justify-between '>
                {
                    ServiceCards.map(ServiceCards => 
                    <div key={ServiceCards.id} 
                    className='mx-auto relative mb-24 cursor-pointer  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl '
                    >
                    <img src={ServiceCards.img} 
                    className='rounded-xl'
                     alt=''/>
                          <div className='text-center px-4 py-8 bg-white shadow-2xl rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-20  '>
                            <h3 className='mb-3 text-[#4D4D4D] font-semibold md:text-medium'>{ServiceCards.title}</h3>
                            <div className='flex flex-center justify-center gap-8 '>
                            <NavLink to={ServiceCards.link}>
                            <button className="flex items-center justify-center text-center text-green-600 font-medium">
                                     Learn More
                                     <svg
                                           xmlns="http://www.w3.org/2000/svg"
                                           className="h-5 w-5 ml-2 transition-transform transform group-hover:translate-x-1"
                                           viewBox="0 0 24 24"
                                           fill="none"
                                           stroke="currentColor"
                                           strokeWidth="2"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                     >
                                       <path d="M5 12h14M12 5l7 7-7 7" />
                                     </svg>
                                </button>
                            </NavLink>
                            </div>
                          </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceCard;























































