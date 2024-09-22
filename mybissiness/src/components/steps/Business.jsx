import { useContext } from "react";
import StepperContext from "../contexts/StepperContext";

const Business = () => {
    const { userData, setUserData } = useContext(StepperContext); // Destructure context

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-4">Business Information</h2>

            <label className="mb-2 font-semibold">Select Business Category</label>
            <select
                name="businessCategory"
                onChange={handleChange}
                className="mb-4 border rounded-lg p-2"
                required
            >
                <option value="">Select a category</option>
                <option value="restaurant">Restaurant</option>
                <option value="retail">Retail</option>
                <option value="service">Service</option>
                <option value="consulting">Consulting</option>
            </select>

            <label className="mb-2 font-semibold">Number of Owners</label>
            <select
                name="numberOfOwners"
                onChange={handleChange}
                className="mb-4 border rounded-lg p-2"
                required
            >
                <option value="">Select number of owners</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="more">More than 3</option>
            </select>

            <label className="mb-2 font-semibold">Type of Space Needed (for Restaurant)</label>
            <input
                type="text"
                name="spaceType"
                onChange={handleChange}
                placeholder="e.g., indoor, outdoor, mixed"
                className="mb-4 border rounded-lg p-2"
                required
            />

            <label className="mb-2 font-semibold">Number of Residence Visas Needed</label>
            <input
                type="number"
                name="residenceVisas"
                onChange={handleChange}
                placeholder="Enter number of visas"
                className="mb-4 border rounded-lg p-2"
                required
            />

        </div>
    );
};

export default Business;
