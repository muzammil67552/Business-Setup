import { Carousel } from "flowbite-react";
import Contact from '../components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from '../components/TestimonialSlider';
import  { useState } from 'react';
import ServiceCard from "../components/ServiceCard";

const Home = () => {
     const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
    return (
        <>
    <div className="mt-48 md:mt-32">
                {/* Banner Section */}
       <div className="w-full h-screen relative">
                  <img
                   src="/homebgcover1.webp" 
                   alt="Hero Banner"
                  className="w-full h-full object-cover"
                   />

                   {/* Overlay Content */}
            <div className={`absolute inset-0 bg-gray-800 transition-all duration-700 ${
                  hovered ? 'bg-opacity-70' : 'bg-opacity-0'
                     }`}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleMouseEnter}                   >
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                             hovered ? 'opacity-100' : 'opacity-0'
                           }`}
                         >
                       <div className="text-center text-white">
                             <h1 className="text-3xl md:text-6xl font-bold mb-4">
                               PETAC Business Consultant Oman
                             </h1>
                             <p className="text-xl text-[#4D4D4D] mb-8 md:w-3/4 mx-auto">
                              SetUp Your Business In Oman With Low Investement. Paracha Enterprises Trading and Contracting LLC (PETAC)Your Trusted Partner for Business Success in Oman
                              One Stop Solution For All Your Business Needs.Get 100% Foreign OwnerShip Company Registered From Highly Experienced Consultant Now...  
                             </p>
                             <button className="btn-primary">
                               Learn More
                             </button>
                        </div>
               </div>
            </div>
         </div>

                {/* Content Section */}
                <div className="w-full md:mt-10 mt-4">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="movingTexts w-full flex flex-row overflow-hidden py-4">
                            <h1 className="text-gray-800 md:text-7xl text-4xl ">
                            PARACHA ENTERPRISES TRADING  AND CONTRACTING LLC. <span className="text-[#4CAF4F]">(PETAC)</span>
                            ONE STOP SOLUTION FOR ALL YOUR BUSINESS NEEDS!
                            </h1>
                        </div>

                        <div className="w-full px-5 md:px-20 flex flex-col md:flex-row justify-between items-center md:mt-16 border-b shadow-md">
                           <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
                                    {/* Heading */}
                                    <h2 className="text-3xl md:text-5xl font-semi-bold mb-6 text-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
                                     Grow and Set Your Business In Oman
                                    </h2>

                                     {/* Paragraph */}
                                    <p className="text-lg md:text-xl text-gray-700 mb-6 transition-all duration-500 hover:text-gray-900">
                                     PETAC offers expert business consultation services in Oman, providing tailored solutions for startups and established companies. We specialize in business setup, strategic planning, and navigating Omans regulatory landscape to ensure smooth operations and growth.
                                    </p>
                                    <button className="btn-primary">
                                      Learn More
                                    </button>
                            </div>
                             <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <img src="/home 3.jpg"
                                     className="w-3/4 md:w-full h-auto object-contain mr-2"
                                     />
                             </div>
                        </div>

                    </div>
                </div>

                {/* Carousel Section */}
                <div className="md:mt-12 mt-4 border-b">
                    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
                        <Carousel className="w-full mx-auto">
                            {/* Add Your business in carousel */}
                            {Array(3).fill("").map((_, i) => (
                                <div key={i} className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 py-12 md:py-20">
                                    {/* Image Section */}
                                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                        <img src="/home 3.jpg" className="w-3/4 md:w-full h-auto object-contain mr-2" alt="Consulting" />
                                    </div>
                                    {/* Text Section */}
                                    <div className="w-full md:w-1/2 text-center md:text-left px-4">
                                        <h1 className="text-3xl md:text-5xl font-semi-bold text-[#4D4D4D] leading-tight pb-6">
                                            Grow Your Business in Oman With <span className="text-[#4CAF4F]">PETAC CONSULTANT</span>
                                        </h1>
                                        <p className="text-base md:text-xl mb-8">
                                            A business consulting firm based in Oman, providing expert guidance on strategic planning, operations, and market expansion. Specializing in helping companies grow within the regions dynamic business environment, the firm offers tailored solutions for sustainable success.
                                        </p>
                                        <button className="btn-primary">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
                  {/* Content Or Text Section */}
                <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen md:mt-24 ">
                    <div className="border-b shadow-md w-full md:text-left px-4">
                        <h1 className="text-3xl md:text-5xl font-semibold text-[#4D4D4D] leading-tight pb-6">
                            The Things You Will Expect From Our Consultant
                        </h1>
                        <p className="text-base md:text-xl mb-8">
                            Making the decision to hire a business consultant is a significant and courageous step for any individual or organization. A consultant is an expert in a specific field, offering guidance and valuable insights to a company or an individual. Expectations from business consultants in Mumbai are often high, and rightfully so. This role typically comes into play when, despite all the hard work, things arent progressing as desired—something that many businesses experience.
                            <br /><br />
                            The job of a consultant is, quite simply, to consult.  no magic formula or secret that makes one consultant more effective than another. What matters is their ability to provide practical solutions. Whether your business is just starting out or well-established, a capable business consultant can be the key to tightening up processes and driving the growth and improvement of your company.
                        </p>
                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            1. Understanding Your Business
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            Different business consulting firms have diverse strengths. When you are searching for a consultant, be sure to select one that has a profound knowledge of what you do and the specific challenges you are facing in your role.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            2. A Familiarity With Your Business
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            Apart from the working knowledge of your industry, the business consultant you hire should know your business inside and out. This is often done through casual conversation and sometimes through numerous evaluations. A great consultant will examine the results of assessments and be able to deliver you a list of strengths and areas of weakness to target for progress.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            3. Passion
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            When choosing a business consultant, ensure they share your passion for success. Don’t settle for being treated as just another client. Your consultant should be as invested in your business as you are. Look for someone who is excited about your goals and ready to bring energy and expertise to every step. The right consultant will treat your success as their own. Expect nothing less than full commitment.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            4. Challenges Your Leadership Skills
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            You should bring out the best in your consultant by combining your leadership skills with their expertise. A capable consultant will not simply tell you what to do, but will guide you in making the best choices by leveraging both your strengths and their knowledge. A talented consultant also knows when to offer inspiration and when to lead you to a better outcome through thoughtful questions and insightful statements. This collaboration ensures a more successful and fulfilling business outcome.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            5. A Calculative Plan
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            Business consultants in Oman are renowned among many in the industry. Based on your input, assessments, and feedback, they should be able to develop and present a strategic plan of action that will help advance your business effectively.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            6. Hold You Accountable
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            Expect your consultant to hold you accountable for keeping your promises and tasks. Everyone needs someone to hold them responsible. Any worthy consultant who sees you skipping promises, commitments, or tasks should sensitively have a vital conversation with you.
                        </p>

                        <h1 className='text-2xl md:text-4xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            7. Measurable Results
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            A genuine business consultant should be able to produce measurable, positive results aligned with your business goals. While overnight success is unrealistic, our services ensure that you are clearly directed towards achieving your objectives. Our approach is designed to provide actionable insights and strategic guidance, helping you make informed decisions and progressively move towards success. With our expertise, you will see tangible improvements and a clear path to growth, demonstrating that you are on the right track.
                        </p>

                        {/* Additional sections omitted for brevity */}
                    </div>
                </div>
                {/* Our ServiceCard Section */}
                <ServiceCard/>
                {/* Client Testimonial */}
                <TestimonialSlider />
                {/* Contact Form */}
                <div>
                    <h1 className="text-center mt-16  md:text-5xl text-2xl font-semibold ">Contact Us</h1>
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;
