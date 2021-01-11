import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./strainDetails.css";

function StrainDetails() {
  const { id, name } = useParams();
  console.log(name);

  const [strainDescription, setStrainDescription] = useState("");
  const [strainEffects, setStrainEffects] = useState({});
  const [strainFlavors, setStrainFlavors] = useState([]);

  // //API REQUEST
  const apiKey = "8f4lAHw";
  const apiDescription = `http://strainapi.evanbusse.com/${apiKey}/strains/data/desc/${id}`;
  const apiEffects = `http://strainapi.evanbusse.com/${apiKey}/strains/data/effects/${id}`;
  const apiFlavors = `http://strainapi.evanbusse.com/${apiKey}/strains/data/flavors/${id}`;

  useEffect(() => {
    getDescription();
    getEffects();
    getFlavors();
  }, []);

  const getDescription = async () => {
    const response = await fetch(apiDescription);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setStrainDescription(data.desc);
  };
  const getEffects = async () => {
    const response = await fetch(apiEffects);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setStrainEffects(data);
  };
  const getFlavors = async () => {
    const response = await fetch(apiFlavors);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setStrainFlavors(data);
  };
  console.log(strainFlavors.length);
  return (
    <div className="strainDetails">
      <h1>{name}</h1>
      <div className="description">{strainDescription}</div>
      {strainEffects.positive && (
        <div className="positiveEffects">
          <h3>Positive Effects:</h3>
          {strainEffects.positive.map((positive) => {
            return <p>{positive}</p>;
          })}
        </div>
      )}
      {strainEffects.negative && (
        <div className="negativeEffects">
          <h3>Negative Effects:</h3>
          {strainEffects.negative.map((negative) => {
            return <p>{negative}</p>;
          })}
        </div>
      )}
      {strainEffects.medical && (
        <div className="medicalUse">
          <h3>Medical Use:</h3>
          {strainEffects.medical.map((use) => {
            return <p>{use}</p>;
          })}
        </div>
      )}
      {strainFlavors.length > 0 && (
        <div className="strainFlavor">
          <h3>Flavor:</h3>
          {strainFlavors.map((flavor) => {
            return <p>{flavor}</p>;
          })}
        </div>
      )}
    </div>
  );
}

export default StrainDetails;
