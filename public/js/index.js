document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o AOS para animações
    AOS.init({
      duration: 1000,
      once: true
    });
  
    // Elementos da página
    const contentFrame = document.getElementById('content-frame');
    const videoContainer = document.getElementById('video-container');
  
    // Função genérica para carregar uma página no iframe ("Início" e "Jogo")
    const loadPage = (url) => {
      contentFrame.style.display = 'block';
      videoContainer.style.display = 'none';
      contentFrame.src = url;
    };
  
    const loadHome = () => loadPage('home.html');
    const loadGame = () => loadPage('jogo.html');
  
    // Função para exibir o container de vídeo (oculta o iframe)
    const loadVideo = () => {
      contentFrame.style.display = 'none';
      videoContainer.style.display = 'flex';
    };
  
    // Adiciona _event listeners_ para os links do menu
    document.getElementById('nav-home').addEventListener('click', (e) => {
      e.preventDefault();
      loadHome();
    });
  
    document.getElementById('nav-game').addEventListener('click', (e) => {
      e.preventDefault();
      loadGame();
    });
  
    document.getElementById('nav-video').addEventListener('click', (e) => {
      e.preventDefault();
      loadVideo();
    });
  
    // Carrega a home como página inicial
    loadHome();
  });
  