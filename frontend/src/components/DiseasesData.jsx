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
        console.log(response.data.diseases);
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
    <>
      <div className="grid">
        {data.map((post) => {
          const { _id, name, def, symptoms } = post;
          return (
            <div className="cards" key={_id}>
              <p style={{ textDecoration: "none" }}>
                <b>{name}:</b> {def}{" "}
              </p>
              <br />
              <p>
                <b>Symptoms:</b> 1){symptoms[0]}, 2){symptoms[1]}, 3)
                {symptoms[2]}, 4){symptoms[3]}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DiseasesData;
