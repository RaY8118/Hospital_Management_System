import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Aboutus from "./pages/Aboutus";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Diseases from "./pages/Diseases.jsx";
import Footer from "./components/Footer.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main.jsx";
import axios from "axios";
import { UserApp } from "./pages/UserApp.jsx";
import Pres from "./pages/Pres.jsx";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/disease" element={<Diseases />} />
          <Route path="/userapp" element={<UserApp />} />
          <Route path="/prescriptions" element={<Pres />} />
        </Routes>
        <ToastContainer position="top-center" />
        <Footer />
      </Router>
    </>
  );
};

export default App;
