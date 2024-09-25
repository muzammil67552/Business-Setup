/* eslint-disable react/no-unescaped-entities */
function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404: Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </a>
      </div>
    );
  }
  
  export default NotFound;
  