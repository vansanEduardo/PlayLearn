// src/routes/NotFound.jsx
import React from 'react';
import './NotFound.css'; // Você pode criar um CSS separado para estilizar a página de erro
import Gif from "../../assets/Gif404.gif"
const NotFound = () => {
  return (
    <div className="not-found">
     <img src={Gif} alt="Error 404" />
    <a href="/PlayLearn"> <button id='back-home'>Voltar Para Home</button></a>
    </div>
  );
};

export default NotFound;
