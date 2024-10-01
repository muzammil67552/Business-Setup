/* eslint-disable react/no-unescaped-entities */
import BlogShortCard from "../components/BlogShortCard";

const BlogForeignerCanBusiness = () => {
  return (
    <>
      <div className="relative w-full h-[90vh] bg-gray-200 overflow-hidden">
        {/* Image with hover animation */}
        <img
          src="/Blogs Images/Banner Foriegner business in oman.webp"
          className="w-full h-full object-cover opacity-70 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-80"
        />
        {/* Overlay and text */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white md:text-5xl text-3xl font-semibold text-center px-4 animate-fade-in">         
                 "Discover how PETAC helps foreigners start and grow businesses in Oman with expert guidance on LLCs, JSCs, and branch offices."
          </h1>
        </div>
      </div>

      <div className="container mx-auto gap-6 flex flex-col md:flex-row md:mt-24 mt-16">
        <div className="w-full md:w-9/12 mt-6 md:mt-0 relative ml-2 border p-4">
          <div className="grid lg:grid-cols-1 md:grid-cols-1">
            <h1 className="md:text-5xl font-semibold text-3xl w-full">
                   Can Foreigners Start a Company in Oman?
            </h1>
            <p className="mt-8 text-gray-600 text-xl"> Absolutely! Oman welcomes foreign investment and   provides an environment that encourages the growth of businesses, both locally and    internationally. Foreigners have various options to establish companies and can benefit from Oman's business-friendly policies and legal frameworks.

             Foreign investors can choose from different types of business entities, including Limited Liability Companies (LLCs), Joint Stock Companies (JSCs), and even Branch Offices. However, depending on the sector, specific regulations may apply. That’s where PETAC comes in. Our expert team is here to guide you through every step, ensuring your business complies with all Omani legal requirements.</p>

            <h1 className="md:text-5xl font-semibold text-3xl w-ful mt-10">Types of Business Structures in Oman</h1>
            <p className="mt-8 text-gray-600 text-xl">When setting up a company in Oman, choosing the right business structure is essential. Here are some of the most common business structures available for foreign investors:</p>

            <h1 className="md:text-5xl font-semibold text-3xl w-full mt-10 ">Different Types Of Business PETAC provided</h1>
            <p className="mt-8 text-gray-600 text-xl  space-y-2 md:mx-12">1.
            <span className="text-xl font-semibold mx-2">Limited Liability Company (LLC):</span>
           An LLC is the most popular business structure in Oman. It provides the flexibility of a partnership and the protection of a corporation. Shareholders enjoy limited liability, meaning their personal assets are protected. An LLC requires at least two shareholders, and it can have up to seventy. It is a suitable choice for businesses looking for flexible management with strong legal protection
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Joint Stock Company (JSC):</span>
            A JSC is ideal for larger businesses that plan to raise capital through public or private offerings. There are two types of JSCs: public and closed. In a public JSC, shares are traded publicly, while a closed JSC limits share ownership to specific individuals or entities. This type of structure is suited for companies looking for substantial growth and public investment.
            </p>
            <p className="md:mt-4 mt-2 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Branch Office:</span>
            For foreign companies wanting to expand their operations into Oman without establishing a separate legal entity, opening a Branch Office is a feasible option. This allows companies to perform similar activities as their parent company but within the Omani market.
            </p>
           

            <h1 className="md:text-5xl font-semibold text-3xl w-ful mt-10">How PETAC Can Help</h1>
            <p className="mt-8 text-gray-600 text-xl">Setting up a business in Oman involves several Navigating the complexities of business setup in a foreign country can be daunting, but with PETAC’s expertise, you’ll have peace of mind. Here’s how we assist:</p>
            <p className="md:mt-4 mt-6 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">1.
            <span className="text-xl font-semibold mx-2 ">Comprehensive Guidance:</span>
            We’ll help you understand the best business structure for your needs, whether it’s an LLC, JSC, or a Branch Office.
            </p>
            <p className="md:mt-4 mt-6 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">2.
            <span className="text-xl font-semibold mx-2">Local Sponsorship:</span>
            Foreign investors often need a local sponsor for certain types of business setups. PETAC will provide the required sponsorship and ensure you meet all the legal criteria.
            </p>
            <p className="md:mt-4 mt-6 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">3.
            <span className="text-xl font-semibold mx-2">Licensing and Registration:</span>
            We handle the entire process of obtaining the necessary licenses, permits, and registrations, allowing you to focus on building your business.
            </p>
            <p className="md:mt-4 mt-6 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">4.
            <span className="text-xl font-semibold mx-2">PRO Services and Visa Assistance:</span>
            From visas to labor cards, our PRO services ensure that all legal formalities related to your workforce are taken care of seamlessly.
            </p>
            <p className="md:mt-4 mt-6 text-gray-600 text-xl space-y-2 md:mx-12 space-x-2">At<span className="md:text-2xl text-xl font-semibold text-black p-2">PETAC</span>we pride ourselves on being a trusted partner for business setup services in Oman. Whether you’re looking to form an LLC, enter the market through a branch office, or seek expert advice on legal regulations, we’ve got you covered.</p>

           <h1 className="md:text-5xl font-semibold text-3xl w-ful mt-10">Conclusion</h1>
           <p className="mt-8 text-gray-600 text-xl">Yes, foreigners can start businesses in Oman. With Oman's welcoming policies and diverse business structures, including LLCs, JSCs, and branch offices, foreign investors have ample opportunities to establish and grow their ventures. PETAC offers expert guidance throughout the process, ensuring compliance with Omani laws and making business setup seamless and straightforward.
          </p>

          </div>
        </div>
        {/* Blog right Portion For All */}
        <BlogShortCard />
      </div>
    </>
  );
};

export default BlogForeignerCanBusiness;
