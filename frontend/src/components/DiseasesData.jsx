import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

const DiseasesData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/disease/diseases"
        );
        console.log(response.data);
        setData(response.data.diseases);
      } catch (error) {
        console.error("Error fetching diseases:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    };
    fetchDiseases();
  }, []);
  return (
    <div className="grid">
      {data.map((post) => {
        const { _id, name, def, symptoms, url } = post;
        return (
          <div className="cards" key={_id}>
            <h2>{name}</h2>
            <p>{def}</p>
            <img src={`/images/${url}`} alt={name} />
            <div>
              <h3>Symptoms</h3>
              <ul>
                {symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiseasesData;
