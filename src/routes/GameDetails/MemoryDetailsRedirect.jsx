import{ useEffect } from 'react';

const MemoryDetails = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './MemoryDetails/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default MemoryDetails;