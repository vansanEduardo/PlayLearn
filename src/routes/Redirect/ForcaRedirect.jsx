import{ useEffect } from 'react';

const ForcaRedirect = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/ForcaGame/forca.html';
  }, []);

  return null; // Não renderiza nada
};

export default ForcaRedirect;