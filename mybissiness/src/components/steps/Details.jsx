import  { useState } from 'react';

const Details = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        nationality: '',
        city: '',
        startBusiness: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

            {/* Name */}
            <label className="mb-2 font-semibold">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mb-4 border rounded-lg p-2"
                required
            />

            {/* Email */}
            <label className="mb-2 font-semibold">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mb-4 border rounded-lg p-2"
                required
            />

            {/* Contact Number with Country Code */}
            <label className="mb-2 font-semibold">Contact Number (With Country Code)</label>
            <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="+Country Code Contact Number"
                className="mb-4 border rounded-lg p-2"
                required
            />

            {/* Nationality */}
            <label className="mb-2 font-semibold">Nationality</label>
            <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                placeholder="Enter your nationality"
                className="mb-4 border rounded-lg p-2"
                required
            />

            {/* Dropdown: Select City for Setting Up Company */}
            <label className="mb-2 font-semibold">Want To Setup a Company in</label>
            <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mb-4 border rounded-lg p-2"
                required
            >
                <option value="">Select a city</option>
                <option value="Muscat">Muscat</option>
                <option value="Salalah">Salalah</option>
                <option value="Sohar">Sohar</option>
                <option value="Nizwa">Nizwa</option>
                <option value="Sur">Sur</option>
            </select>

            {/* Radio Buttons: When to Start Business */}
            <label className="mb-2 font-semibold">When Will You Start the Business?</label>
            <div className="mb-4">
                <label className="mr-4">
                    <input
                        type="radio"
                        name="startBusiness"
                        value="1 Week"
                        checked={formData.startBusiness === '1 Week'}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    1 Week
                </label>
                <label>
                    <input
                        type="radio"
                        name="startBusiness"
                        value="More than 1 Week"
                        checked={formData.startBusiness === 'More than 1 Week'}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    More than 1 Week
                </label>
            </div>

           
        </div>
    );
};

export default Details;
