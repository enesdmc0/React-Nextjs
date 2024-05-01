import React from 'react';
import {revalidateTasks} from "@/lib/actions";

async function getTasks() {
    const response = await fetch("http://127.0.0.1:8090/api/collections/tasks/records",
        {next: {tags: ["tasks"]}})
    return await response.json()
}

const Tasks = async () => {
    const tasks = await getTasks()

    return (
        <section className="mt-16 border rounded-md p-5">
            <form action={revalidateTasks} className="flex items-center justify-between">
                <h3 className="text-xl font-serif">Revalidate Tasks</h3>
                <button className="border rounded-md p-3 bg-white text-black">Revalidate Tasks</button>
            </form>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tasks.items.map((x: any) => (
                    <div key={x.id} className="p-4 text-black shadow bg-white rounded-md">
                        <h3 className="font-semibold font-serif">{x.title}</h3>
                        <p>{x.completed ? "Completed" : "Pending"}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tasks;
