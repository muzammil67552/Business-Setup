import { Categories } from '../assets/ServiceCatagory';  
import { NavLink } from 'react-router-dom';

const CatagoriesService = () => {
    return (
        <div className="w-full md:w-3/12">
         <div className="bg-green-600 text-white text-xl font-bold px-2 py-4">
          Choose Our Service by Categories
         </div>
        <ul className="space-y-6 bg-gray-100 p-3 border">
           {Categories.map((category, index) => (
            <li key={index} className="flex items-center text-xl font-medium">
              <span className="font-bold text-xl mx-2 mr-2">✓</span>
              <NavLink to={category.link} className="text-gray-700">
                {category.title}
              </NavLink>
            </li>
            ))}
           </ul>
      </div>
    );
};

export default CatagoriesService;