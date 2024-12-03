import{ useEffect } from 'react';

const GhostDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './GhostDetails/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default GhostDetails;