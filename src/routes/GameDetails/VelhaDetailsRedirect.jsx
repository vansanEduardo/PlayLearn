import{ useEffect } from 'react';

const VelhaDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './VelhaDetails/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default VelhaDetails;