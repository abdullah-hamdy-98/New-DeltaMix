"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import axios from 'axios'
import { DOMAIN } from '@/utils/constants';



const LoginForm = () => {
    const [pureUserId, setUserId] = useState("");
    const [Pwd, setPwd] = useState("");
    const router = useRouter()

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (pureUserId === "") {
            return toast.error("يرجى إدراج إسم المستخدم");
        }

        if (Pwd === "") {
            return toast.error("كلمة المرور خاطئة");
        }

        const UserId = parseInt(pureUserId);
        try {
            await axios.post(`${DOMAIN}/api/users/login`, { UserId, Pwd })
            router.replace('/');
            router.refresh()


        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
            console.log(error);
        }


    }

    return (
        <>
            <form onSubmit={formSubmitHandler} className="login-form">
                <label htmlFor="UserId">إسم المستخدم</label>
                <input
                    type="text"
                    placeholder="إسم المستخدم"
                    id="UserId"
                    value={pureUserId}
                    onChange={(e) => setUserId(e.target.value)}
                />

                <label htmlFor="Pwd">كلمة المرور</label>
                <input
                    type="password"
                    placeholder="كلمة المرور"
                    id="Pwd"
                    value={Pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />

                <button type="submit">دخول</button>
                <Link href='/'>الرئيسية</Link>
            </form>
        </>
    )
}

export default LoginForm;
