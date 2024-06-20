import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Context } from "../main";
import { toast } from 'react-toastify';
const Navbar = () => {
    const [show, setShow] = useState("");
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigateto = useNavigate();
    const handleLogout = async () => {
        await axios.get("http://127.0.0.1:4000/api/v1/user/patient/logout", { withCredentials: true })
            .then(res => {
                toast.success(res.data.message);
                setIsAuthenticated(false);
            })
            .catch((err) => {
                toast.error(err.response.data.message)
            })

    }
    const gotoLogin = async () => {
        navigateto('/login')
    }
    return (
        <nav className='container'>
            <div className="logo">Care</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    <Link to={"/"}>HOME</Link>
                    <Link to={"/appointment"}>APPOINTMENT</Link>
                    <Link to={"/about"}>ABOUT US</Link>
                </div>
                {isAuthenticated ? (<button className='logoutBtn btn' onClick={handleLogout}>LOGOUT</button>) : (<button className='logoutBtn btn' onClick={gotoLogin}>LOGIN</button>)}
            </div>
        </nav>
    )
}

export default Navbar
