import "./globals.css";
import Loader from '../components/Loader';
import Link from 'next/link'

function login() {
    return (
        <>
        <Loader></Loader>
        <div className='bg-container'>
            <div className="login-background">
                
                <form className="login-form">
                    

                    <label htmlFor="username">إسم المستخدم</label>
                    <input type="text" placeholder="إسم المستخدم" id="username" required/>

                    <label htmlFor="password">كلمة المرور</label>
                    <input type="password" placeholder="كلمة المرور" id="password" required/>

                    <button type="submit">دخول</button>
                    <Link href='/'>الرئيسية</Link>
    
                </form>
            </div>
            </div>
        </>
    )
}

export default login;