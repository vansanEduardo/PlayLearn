import{ useEffect } from 'react';

const ForcaRedirect = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './GhostAtack/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default ForcaRedirect;