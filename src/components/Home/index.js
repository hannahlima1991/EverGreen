import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  const apiKey = "8f4lAHw";
  const apiRequest = `http://strainapi.evanbusse.com/${apiKey}/strains/search/all`;

  useEffect(() => {
    getStrainList();
  }, []);

  const getStrainList = async () => {
    const response = await fetch(apiRequest);
    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>YO!</h1>
    </div>
  );
}

export default Home;
