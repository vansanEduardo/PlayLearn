import React, { useEffect, useState } from "react";

import "./Conquistas.css";

function Conquistas() {
  const [conquistas, setConquistas] = useState({});

  useEffect(() => {
    const dadosConquistas =
      JSON.parse(localStorage.getItem("conquistas")) || {};
    setConquistas(dadosConquistas);
  }, []);

  return (
    <div className="container-conquistas">
      <h1>Conquistas</h1>
      {Object.keys(conquistas).map((jogoId) => (
        <div key={jogoId} className="game-achievement">
          <img className="logo" src={`./${jogoId}.png`} alt="" />

          {conquistas[jogoId].map((conquista, index) => (
            <div key={index} className="trophy">
              <img
                src="./bronze.png"
                className={conquista === "bronze" ? "active" : ""}
                alt="trofeu de bronze"
              />
              <img
                src="./prata.png"
                className={conquista === "prata" ? "active" : ""}
                alt="trofeu de prata"
              />
              <img
                src="./ouro.png"
                className={conquista === "ouro" ? "active" : ""}
                alt="trofeu de ouro"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Conquistas;
