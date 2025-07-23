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
     /*=============== LÓGICA DO CARROSSEL DE PROCESSO ===============*/
    let processSwiper;
    const breakpoint = 768; // Ponto de transição para desktop

    const initSwiper = () => {
        processSwiper = new Swiper('.process__container.swiper', {
            // Configurações Mobile
            slidesPerView: 1.2, // Mostra 1 slide e um pedaço do próximo
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    };

    const destroySwiper = () => {
        if (processSwiper) {
            processSwiper.destroy(true, true);
            processSwiper = undefined;
        }
    };

    const handleCarousel = () => {
        if (window.innerWidth < breakpoint) {
            // Se for mobile e o carrossel não existir, crie-o
            if (!processSwiper) {
                initSwiper();
            }
        } else {
            // Se for desktop, destrua o carrossel
            destroySwiper();
        }
    };

    // Executa a lógica ao carregar e ao redimensionar a tela
    handleCarousel();
    window.addEventListener('resize', handleCarousel);
});
