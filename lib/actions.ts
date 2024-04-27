"use server"
import {cookies} from "next/headers";
import pbAuth from "./pbAuth";
import {redirect} from "next/navigation";


export const getCrmEvents = async (page:number) => {
    const isPb = await pbAuth();
    if (!isPb) return null
    const events: any = await isPb.collection("crm_events").getList( 1,  20 * page, {sort: '-created'});
    return events;
}

export const pbLogout = () => {
    const cookieStore = cookies()
    cookieStore.delete("pb_auth")
    redirect("/login")
}