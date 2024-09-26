/* eslint-disable react/no-unescaped-entities */
function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-4 sm:text-center">404: Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 sm:text-center">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="btn-primary"  >
          Go Back to Home
        </a>
      </div>
    );
  }
  
  export default NotFound;
  