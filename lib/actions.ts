"use server"

import {revalidatePath, revalidateTag} from "next/cache";
import {redirect} from "next/navigation";

export async function revalidateUsers() {
    revalidateTag("users")
    redirect("/")
}

export async function revalidateTasks() {
    revalidateTag("tasks")
    redirect("/")
}

export async function revalidateAll() {
    revalidatePath("/")
    redirect("/")
}