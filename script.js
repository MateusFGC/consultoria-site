/*=============== SMOOTH SCROLL FOR NAV LINKS ===============*/
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