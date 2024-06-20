import React, { useContext, useState } from 'react'
import { Context } from '../main'
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigateto = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:4000/api/v1/user/login",
                {email,password,confirmPassword,role: "Patient"},
                {
                    withCredentials: true,
                    Headers:{"Content-Type": "application/json"}
                }
            );
            toast.success(response.data.message);
            setIsAuthenticated(true);
            navigateto("/");
        } catch (error) {
            toast.success(error.response.data.message);
        }
    }

    if (isAuthenticated) {
        return <Navigate to={"/"} />
    }
    return (
        <>
        <div className='container form-component login-form'>
            <h2>Sign In</h2>
            <p>Please Login to Continue</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem magnam minima recusandae, vel optio?</p>
            <form onSubmit={handleLogin}>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
                <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
                    <p style={{ marginBottom: 0 }}>Not Registered</p>
                    <Link> to={"/register"} style:{{ textDecoration: "none", alignItems: "center" }}</Link>
                </div>
                <div style={{ justifyContent: " center", alignItems: "center" }}>
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login
