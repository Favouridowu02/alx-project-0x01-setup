import {UserData, UserModalProps} from "@/interfaces";
import React, { useState } from "react";


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({...prevUser, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                    Add New User
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            id='name'
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Full Name"
                        />
                        
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                        <input
                            type="text"
                            id='username'
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Username"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id='email'
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Email"
                        />
                    </div>
                    <address className="mb-4">
                        <h3 className="text-center">Address</h3>
                        <div>
                            <label htmlFor="street" className="block text-gray-700 font-medium mb-2">Street</label>
                            <textarea
                                rows={2}
                                id='street'
                                name="street"
                                value={user.address.street}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Street"/>
                        </div>
                        <div>
                            <label htmlFor="suite" className="block text-gray-700 font-medium mb-2">Suite</label>
                            <textarea
                                rows={2}
                                id='suite'
                                name="suite"
                                value={user.address.suite}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter suite"/>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                            <textarea
                                rows={2}
                                id='city'
                                name="city"
                                value={user.address.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter city"/>
                        </div>
                        <div>
                            <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
                            <input
                                type="text"
                                id='zipcode'
                                name="zipcode"
                                value={user.address.zipcode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter zipcode"/>
                        </div>
                        <div>
                            <h4>Geo</h4>
                            <div>
                                <label htmlFor="lat" className="block text-gray-700 font-medium mb-2">Latitude</label>
                                <input
                                    type="number"
                                    id='lat'
                                    name="lat"
                                    value={user.address.geo.lat}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter latitude"/>
                            </div>
                            <div>
                                <label htmlFor="lng" className="block text-gray-700 font-medium mb-2">Longitude</label>
                                <input
                                    type="number"
                                    id='lng'
                                    name="lng"
                                    value={user.address.geo.lng}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Longitude"/>
                            </div>
                        </div>
                    </address>
                    <div className="mb-4">
                        <label htmlFor="phone" className="phone text-gray-700 font-medium mb-2">Phone</label>
                        <input
                            type="phone"
                            id='phone'
                            name="phone"
                            value={user.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="phone text-gray-700 font-medium mb-2">Website</label>
                        <input
                            type="website"
                            id='website'
                            name="website"
                            value={user.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Website"
                        />
                    </div>
                    <aside className="mb-4">
                        <h3>Company Description</h3>
                        <div className="mb-4">
                            <label htmlFor="name" className="phone text-gray-700 font-medium mb-2">Company name</label>
                            <input
                                type="text"
                                id='companyName'
                                name="companyName"
                                value={user.company.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter company name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="catchPhrase" className="phone text-gray-700 font-medium mb-2">Company catchPhrase</label>
                            <input
                                type="text"
                                id='catchPhrase'
                                name="catchPhrase"
                                value={user.company.catchPhrase}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter catch Phrase"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="bs" className="phone text-gray-700 font-medium mb-2">Company bs</label>
                            <input
                                type="text"
                                id='bs'
                                name="bs"
                                value={user.company.bs}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter bs"
                            />
                        </div>
                    </aside>
                    <div className="flex justify-center items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add Post
                        </button>
                    </div>
                </form> 
            </div>
        </div>
    );
};

export default UserModal;