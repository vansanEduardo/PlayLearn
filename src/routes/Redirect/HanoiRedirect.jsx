import{ useEffect } from 'react';

const HanoiRedirect = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/HanoiGame/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default HanoiRedirect;