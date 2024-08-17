import "./globals.css";
import Loader from '../components/Loader';
import LoginForm from "./LoginForm";

function LoginPage() {
    return (
        <>
            <Loader></Loader>
            <div className='bg-container'>
                <div className="login-background">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginPage;