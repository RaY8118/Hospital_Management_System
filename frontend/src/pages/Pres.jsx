import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pres = () => {
    const [pres, setPres] = useState([])
    useEffect(() => {
        const getUserPres = async () => {
            try {
                const data = await axios.get("http://localhost:4000/api/v1/pres/getUserPres",
                    { withCredentials: true }
                );
                setPres(data.data.pres)
                console.log(data.data.pres)

            }
            catch (error) {
                setPres([])
                console.log("Error occured while retrieving the data", error)
            };
        };
        getUserPres();
    }, [])
    return (
        <div>
            <h1 style={{ marginTop: "100px" }}>Prescriptions</h1>
        </div>
    )
}

export default Pres
