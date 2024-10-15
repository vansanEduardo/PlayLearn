import{ useEffect } from 'react';

const SnakeDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/SnakeDetails/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default SnakeDetails;