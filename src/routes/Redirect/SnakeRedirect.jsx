import{ useEffect } from 'react';

const SnakeRoute = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './SnakeGame/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default SnakeRoute;