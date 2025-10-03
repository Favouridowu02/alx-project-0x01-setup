import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserData, UserProps } from "@/interfaces"
import React, { useState } from "react"
import UserModal from "@/components/common/UserModal";


const Users: React.FC<{users: UserProps[]}> = ( {users} ) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: users.length + 1})
    }
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">
                        User Content
                    </h1>
                    <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {
                        users?.map(({id, name, username, email, address, phone, website, company}: UserProps, key: number) => (
                            <UserCard key={key} id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} company={company} />
                        ))
                    }
                </div>
            </main>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser}/>
            )}

        </div>

    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return {
        props: {
            users
        }
    };
}

export default Users;