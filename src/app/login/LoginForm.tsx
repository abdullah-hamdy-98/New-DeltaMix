"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import {  toast } from 'react-toastify';


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "") return toast.error("يرجى إدراج إسم المستخدم") 
        if (password === "") return toast.error("كلمة المرور خاطئة") 

        console.log(username, password);
     
    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className="login-form">
                <label htmlFor="username">إسم المستخدم</label>
                <input
                    type="text"
                    placeholder="إسم المستخدم"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">كلمة المرور</label>
                <input
                    type="password"
                    placeholder="كلمة المرور"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">دخول</button>
                <Link href='/'>الرئيسية</Link>

            </form>
        </>
    )
}

export default LoginForm;