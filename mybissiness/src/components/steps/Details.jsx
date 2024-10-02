import { useContext } from "react";
import StepperContext from "../contexts/StepperContext";

const Details = () => {
    const { userData, setUserData } = useContext(StepperContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

            {/* Name */}
            <label className="mb-2 font-semibold">Name</label>
            <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Enter your name" className="mb-4 border rounded-lg p-2" />

            {/* Email */}
            <label className="mb-2 font-semibold">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Enter your email" className="mb-4 border rounded-lg p-2" />

            {/* Contact Number */}
            <label className="mb-2 font-semibold">Contact Number</label>
            <input type="text" name="contactNumber" value={userData.contactNumber} onChange={handleChange} placeholder="+Country Code Contact Number" className="mb-4 border rounded-lg p-2" />

            {/* Nationality */}
            <label className="mb-2 font-semibold">Nationality</label>
            <input type="text" name="nationality" value={userData.nationality} onChange={handleChange} placeholder="Enter your nationality" className="mb-4 border rounded-lg p-2" />

            {/* City */}
            <label className="mb-2 font-semibold">Want To Setup a Company in</label>
            <select name="city" value={userData.city} onChange={handleChange} className="mb-4 border rounded-lg p-2">
                <option value="">Select a city</option>
                <option value="Muscat">Muscat</option>
                <option value="Salalah">Salalah</option>
                <option value="Sohar">Sohar</option>
                <option value="Nizwa">Nizwa</option>
                <option value="Sur">Sur</option>
            </select>

            {/* Start Business */}
            <label className="mb-2 font-semibold">When Will You Start the Business?</label>
            <div className="mb-4">
                <label className="mr-4">
                    <input type="radio" name="startBusiness" value="1 Week" checked={userData.startBusiness === "1 Week"} onChange={handleChange} className="mr-2" />
                    1 Week
                </label>
                <label>
                    <input type="radio" name="startBusiness" value="More than 1 Week" checked={userData.startBusiness === "More than 1 Week"} onChange={handleChange} className="mr-2" />
                    More than 1 Week
                </label>
            </div>
        </div>
    );
};

export default Details;
