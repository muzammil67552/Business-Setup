import { NavLink } from 'react-router-dom';
import BlogShortCard from '../components/BlogShortCard';


const Blogs = () => {
    const BlogsCards = [
        {
            id: 1,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 2,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 2,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 3,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 4,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 5,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 6,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
        {
            id: 7,
            title: "Providing trusted Company Registration in Oman for seamless business operations and legal compliance",
            img: "/modernbusinessblog.png",
            link: "/blogs/business-setup-oman", // path are redirect from app.jsx
        },
    ];

    return (
        <>
            {/* Banner Section */}
            <div className="relative h-64 md:h-96 w-full md:mt-36 page-top group">
                <img src="/main banner for blog.png" className="w-full h-full" alt="Banner" />

                {/* Heading to appear on image hover */}
                <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-1000 ease-out flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                        Blogs Section
                    </h1>
                </div>
            </div>

            <div className="bg-white px-4   md:mt-24 mt-10">
                <div className="px-4  max-w-screen-2xl mx-auto my-12 md:mt-24 mt-12">
                                {/* Main Heading */}
                    <div className="text-center md:w-1/2 mx-auto">
                        <h2 className="md:text-5xl text-2xl font-semibold mb-10">
                            <span className="text-[#4CAF4F]">News Letter</span> & Blogs
                        </h2>
                    </div>

                    {/* BlogsCard */}
                    <div className="container mx-auto gap-6 flex flex-col md:flex-row">
                        <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2">
                        
                            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 items-center justify-between">
                                {BlogsCards.map((BlogsCards) => (
                                    <div
                                        key={BlogsCards.id}
                                        className="mx-auto relative mb-24 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <img src={BlogsCards.img} className="rounded-xl" alt="" />
                                        <div className="text-center px-4 py-8 bg-white shadow-2xl rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-20">
                                            <h3 className="mb-3 text-[#4D4D4D] font-semibold md:text-medium">
                                                {BlogsCards.title}
                                            </h3>
                                            <div className="flex flex-center justify-center gap-8">
                                                <NavLink to={BlogsCards.link}>
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
                                ))}
                            </div>
                        </div>
                        {/* Blog Left Portion For All */}
                        <BlogShortCard/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
