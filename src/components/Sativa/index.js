import React, { useEffect, useState } from "react";
import "./Sativa.css";

function Sativa() {
  const [sativaList, setSativaList] = useState([]);

  // //API REQUEST
  const apiKey = "8f4lAHw";
  const apiRequest = `http://strainapi.evanbusse.com/${apiKey}/strains/search/race/sativa`;
  // strainapi.evanbusse.com / API_KEY / strains / search / race / sativa;

  useEffect(() => {
    getSativaList();
  }, []);

  const getSativaList = async () => {
    const response = await fetch(apiRequest);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setSativaList(data);
  };

  return (
    <div className="sativaList">
      {sativaList.map((sativa, i) => {
        const { name, race, id } = sativa;
        // console.log(id);

        return (
          <a target="_blank" href={`/strain/${name}/${id}`} key={i}>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">
                  <p>{name}</p>
                  <p>{race}</p>
                </h4>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Sativa;
