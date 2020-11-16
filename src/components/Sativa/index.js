import React from "react";
import "./Sativa.css";

function Sativa() {
  // //API REQUEST
  // const apiKey = "8f4lAHw";
  // const apiRequest = `http://strainapi.evanbusse.com/${apiKey}/strains/search/all`;
  // // strainapi.evanbusse.com / API_KEY / strains / search / race / sativa;

  // useEffect(() => {
  //   getStrainList();
  // }, []);

  // const getStrainList = async () => {
  //   const response = await fetch(apiRequest);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    <div className="App">
      <h1>This is Sativa!</h1>
    </div>
  );
}

export default Sativa;

//API REQUEST
// const apiKey = "8f4lAHw";
// const apiRequest = `http://strainapi.evanbusse.com/${apiKey}/strains/search/all`;
//strainapi.evanbusse.com/API_KEY/strains/search/race/sativa

// useEffect(() => {
//   getStrainList();
// }, []);

// const getStrainList = async () => {
//   const response = await fetch(apiRequest);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// };
