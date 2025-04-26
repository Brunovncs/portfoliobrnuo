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
      contentFrame.src = url;
    };
  
    const loadHome = () => loadPage('home.html');
  
    // Adiciona _event listeners_ para os links do menu
    document.getElementById('nav-home').addEventListener('click', (e) => {
      e.preventDefault();
      loadHome();
    });
  
    // Carrega a home como página inicial
    loadHome();
  });
  