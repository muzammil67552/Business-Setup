/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "flowbite-react";
import Contact from '../components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlider from '../components/TestimonialSlider';


const Home = () => {
    return (
        <>
            <div className="mt-48 md:mt-32">
                {/* Banner Section */}
                <div>
                    <img 
                        src="/Home main.png" 
                        alt="Banner" 
                        className="w-full h-60 md:h-96 object-cover md:mt-10 mt-5 p-2"
                    />
                </div>

                {/* Content Section */}
                <div className="container md:mt-10 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-b md:mx-auto">
                    {/* Text Section */}
                    <div className="px-4 md:px-0">
                        <h2 className="font-semibold text-2xl md:text-3xl cursor-pointer hover:text-gray-400 md:font-bold">
                             Get Consultant For Your Business from PETAC
                        </h2>
                        <p className="text-base md:text-xl mt-4">
                            We specialize in providing strategic business consulting services tailored to the unique needs of enterprises in Oman. Our mission is to drive growth and operational efficiency by delivering insightful, data-driven solutions.
                        </p>
                        {/* Button Will Use In Every Code */}
                        <button className="btn-primary">
                            Contact Us
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center md:justify-start">
                        <img src='/home 2.jpg' className="w-96 md:w-96 p-2" alt="Consulting Image 1" />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img src='/home 3.jpg' className="w-96 md:w-96 p-2" alt="Consulting Image 2" />
                    </div>
                </div> 

                {/* Carousel Section */}
                <div className='md:mt-12 mt-4'>
                    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                        <Carousel className='w-full mx-auto'>
                            {/* Add Your business in carousel */}

                            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 py-12 md:py-20">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <img src='/home 3.jpg' className="w-3/4 md:w-full h-auto object-contain mr-2" alt="Consulting" />
                                </div>

                                {/* Text Section */}
                                <div className='w-full md:w-1/2 text-center md:text-left px-4'>
                                    <h1 className='text-3xl md:text-5xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                                        Grow Your Business in Oman With <span className='text-[#4CAF4F]'>PETAC CONSULTANT</span>
                                    </h1>
                                    <p className='text-base md:text-xl mb-8'>
                                        A business consulting firm based in Oman, providing expert guidance on strategic planning, operations, and market expansion. Specializing in helping companies grow within the region's dynamic business environment, the firm offers tailored solutions for sustainable success.
                                    </p>
                                    <button className='btn-primary'>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 py-12 md:py-20">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <img src='/home 3.jpg' className="w-3/4 md:w-full h-auto object-contain mr-2" alt="Consulting" />
                                </div>

                                {/* Text Section */}
                                <div className='w-full md:w-1/2 text-center md:text-left px-4'>
                                    <h1 className='text-3xl md:text-5xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                                        Grow Your Business in Oman With <span className='text-[#4CAF4F]'>PETAC CONSULTANT</span>
                                    </h1>
                                    <p className='text-base md:text-xl mb-8'>
                                        A business consulting firm based in Oman, providing expert guidance on strategic planning, operations, and market expansion. Specializing in helping companies grow within the region's dynamic business environment, the firm offers tailored solutions for sustainable success.
                                    </p>
                                    <button className='btn-primary'>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 py-12 md:py-20">
                                {/* Image Section */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <img src='/home 3.jpg' className="w-3/4 md:w-full h-auto object-contain mr-2" alt="Consulting" />
                                </div>

                                {/* Text Section */}
                                <div className='w-full md:w-1/2 text-center md:text-left px-4'>
                                    <h1 className='text-3xl md:text-5xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                                        Grow Your Business in Oman With <span className='text-[#4CAF4F]'>PETAC CONSULTANT</span>
                                    </h1>
                                    <p className='text-base md:text-xl mb-8'>
                                        A business consulting firm based in Oman, providing expert guidance on strategic planning, operations, and market expansion. Specializing in helping companies grow within the region's dynamic business environment, the firm offers tailored solutions for sustainable success.
                                    </p>
                                    <button className='btn-primary'>
                                        Learn More
                                    </button>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>

                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen'>
                    <div className='border-b shadow-md w-full  md:text-left px-4'>
                        <h1 className='text-3xl md:text-5xl font-semibold text-[#4D4D4D] leading-tight pb-6'>
                            The Things You Will Expect From Our Consultant
                        </h1>
                        <p className='text-base md:text-xl mb-8'>
                            Making the decision to hire a business consultant is a significant and courageous step for any individual or organization. A consultant is an expert in a specific field, offering guidance and valuable insights to a company or an individual. Expectations from business consultants in Mumbai are often high, and rightfully so. This role typically comes into play when, despite all the hard work, things aren’t progressing as desired—something that many businesses experience.
                            <br /><br />
                            The job of a consultant is, quite simply, to consult. There’s no magic formula or secret that makes one consultant more effective than another. What matters is their ability to provide practical solutions. Whether your business is just starting out or well-established, a capable business consultant can be the key to tightening up processes and driving the growth and improvement of your company.
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
                            When choosing a business consultant, ensure they share your passion for success. Don’t settle for being treated as just "another" client. Your consultant should be as invested in your business as you are. Look for someone who is excited about your goals and ready to bring energy and expertise to every step. The right consultant will treat your success as their own. Expect nothing less than full commitment.
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
                            A genuine business consultant should be able to produce measurable, positive results aligned with your business goals. While overnight success is unrealistic, our services ensure that you are clearly directed towards achieving your objectives. Our approach is designed to provide actionable insights and strategic guidance, helping you make informed decisions and progressively move towards success. With our expertise, you'll see tangible improvements and a clear path to growth, demonstrating that you are on the right track.
                        </p>
                    </div>
                </div>
                {/* Client Testimonial  */}

               <TestimonialSlider/>
              {/* Contact Form */}
              <div>
                    <h1 className="md:text-4xl text-2xl font-bold text-center mb-10 mt-16 ">Contact Us</h1>
                </div>
                  <Contact/>
                 
            </div>
        </>
    );
};

export default Home;