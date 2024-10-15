import{ useEffect } from 'react';

const TicTacToeRedirect = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/VelhaGame/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default TicTacToeRedirect;