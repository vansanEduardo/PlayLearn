import{ useEffect } from 'react';

const ForcaDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = '/ForcaDetails/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default ForcaDetails;