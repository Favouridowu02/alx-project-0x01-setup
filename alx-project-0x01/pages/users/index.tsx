import Header from "@/components/layout/Header"
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"
import React from "react"


const Users: React.FC<UserProps[]> = ({ users }) => {
    console.log(users)
    return (
        <div>
            <Header/>
        </div>

    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = response.json();

    return {
        props: {
            users
        }
    }
}

export default Users;