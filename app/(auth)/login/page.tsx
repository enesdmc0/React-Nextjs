"use client"
import React, {useState} from 'react';

import {useRouter} from "next/navigation";

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        const login = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify({
                email, password,
            }),
        });
        console.log(login, "-----login page , login successfull-----")
        if (login.status == 200) {
            router.push("/");
        } else if (login.status == 400) {
            router.push("/login");
        }

    }


    return (
        <div>
            <input value={email} onChange={(e: any) => setEmail(e.target.value)}/>
            <input value={password} onChange={(e: any) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>
                Sign in
            </button>
        </div>
    );
};

export default Login;