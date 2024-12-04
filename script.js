// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Aparece após rolar 200px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Rola suavemente para o topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
