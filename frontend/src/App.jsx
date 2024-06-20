import React, { useContext, useEffect } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Aboutus from './pages/Aboutus'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Context } from './main'
import axios from 'axios'

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/api/v1/user/patient/me", { withCredentials: true });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({})
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <ToastContainer position='top-center' />
      </Router>
    </>
  )
}

export default App
