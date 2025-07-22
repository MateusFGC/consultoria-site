/*=============== SCROLL suave ===============*/
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de navegação que apontam para âncoras na página
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link (salto brusco)
            e.preventDefault();

            // Pega o ID do alvo (ex: '#about') a partir do href do link
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente até o elemento alvo
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha o topo do elemento com o topo da janela de visualização
                });
            }
        });
    });
});
/*=============== CARROSSEL PROCESSO ===============*/
const processSwiper = new Swiper('.process__container.swiper', {
    // Configurações padrão (Mobile)
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    // Paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Configuração responsiva (Breakpoints)
    breakpoints: {
      // Quando a tela for 768px ou maior
      768: {
        slidesPerView: 3, // Mostra 3 slides
        centeredSlides: false,
        loop: false,
      },
      // Quando a tela for 1024px ou maior
      1024: {
        slidesPerView: 4, // Mostra 4 slides (layout de grade)
        spaceBetween: 30,
        centeredSlides: false,
        loop: false,
      }
    }
});