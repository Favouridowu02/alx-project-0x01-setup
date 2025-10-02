import { UserProps } from "@/interfaces"
import React from "react"

const UserCard: React.FC<UserProps> = ({id, name, username, email, address, phone, website, company}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {name}({username})
                </h2>
                <p  className="text-gray-600">Email: {email}</p>
                <div>
                    <span>UserId: {id}</span>
                </div>
                <address className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <span>Street: {address.street}</span>
                    <span>Suite: {address.suite}</span>
                    <span>City: {address.city}</span>
                    <span>zipcode: {address.zipcode}</span>
                    <span>Geo: Lat {address.geo.lat} and Lng {address.geo.lng}</span>
                </address>
            </div>
        </div>

    )
}

export default UserCard;