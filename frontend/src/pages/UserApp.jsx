import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const UserApp = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/appointment/getuserApp",
                    { withCredentials: true }
                );
                setAppointments(data.appointments);
            } catch (error) {
                setAppointments([]);
            }
        };
        fetchAppointments();
    }, []);

    // const { isAuthenticated } = useContext(Context);
    // if (!isAuthenticated) {
    //     return <Navigate to={"/login"} />;
    // }

    return (
        <>
            <section className="dashboard page">
                <div className="banner">
                    <div className="header">
                        <h5>Appointments</h5>
                    </div>
                    <table border={1}>
                        <thead>
                            <tr style={{ textAlign: "center" }}>
                                <th>Patient</th>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Department</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments && appointments.length > 0
                                ? appointments.map((appointment) => (
                                    <tr key={appointment._id}>
                                        <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                                        <td>{appointment.appointment_date.substring(0, 16)}</td>
                                        <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                                        <td>{appointment.department}</td>
                                        <td>
                                            <div
                                                className={
                                                    appointment.status === "Pending"
                                                        ? "value-pending"
                                                        : appointment.status === "Accepted"
                                                            ? "value-accepted"
                                                            : "value-rejected"
                                                }
                                            >
                                                {appointment.status}
                                            </div>

                                        </td>
                                    </tr>
                                ))
                                : "No Appointments Found!"}
                        </tbody>
                    </table>

                    { }
                </div>
            </section>
        </>
    );
};

