import React from 'react';
import pbAuth from "@/lib/pbAuth";
import {redirect} from "next/navigation";

const HomeLayout = async ({children}: {children: React.ReactNode}) => {

    const isPb = await pbAuth();


    if (!isPb) {
        console.log("---No pb auth---")
        redirect("/login");
    }

    return (
        <>{children}</>
    );
};

export default HomeLayout;