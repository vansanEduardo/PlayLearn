import{ useEffect } from 'react';

const HanoiDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/HanoiDetails/HanoiDetails.html';
  }, []);

  return null; // Não renderiza nada
};

export default HanoiDetails;