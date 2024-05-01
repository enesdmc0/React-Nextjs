import React from 'react';
import {revalidateUsers} from "@/lib/actions";


async function getUsers() {
    const response = await fetch("http://127.0.0.1:8090/api/collections/users1/records", {next: {tags: ["users"]}})
    return await response.json()
}

const Users = async () => {
    const users = await getUsers()

    return (
        <section className="mt-16 rounded-md border p-5">
            <form action={revalidateUsers} className="flex items-center justify-between">
                <h3 className="text-xl font-serif">Revalidate Users</h3>
                <button className="border rounded-md p-3 bg-white text-black">Revalidate Users</button>
            </form>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.items.map((x: any) => (
                    <div key={x.id} className="p-4 text-black shadow bg-white rounded-md">
                        <h3 className="font-semibold font-serif">{x.name}</h3>
                        <p>{x.email}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Users;
