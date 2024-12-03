import{ useEffect } from 'react';

const MemoryRedirect = () => {
  useEffect(() => {
    // Redireciona para a página HTML do jogo Snake
    window.location.href = './MemoryGame/index.html';
  }, []);

  return null; // Não renderiza nada
};

export default MemoryRedirect;