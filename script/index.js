// CARROSSEL -> 
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(document.querySelectorAll('.card'));
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    const cardsPerView = 3; 
    // O número total de cards
    const totalCards = cards.length; 
    // O card index que está mais à esquerda (inicia em 0)
    let currentCardIndex = 0; 

    // Largura total de um card + margem
    // Precisamos pegar a largura exata de um card no CSS (280px + 30px = 310px)
    const cardWidthWithMargin = 310; // Ajuste este valor de acordo com seu CSS (min-width + margin-right)

    // --- Funções de Navegação ---

    const updateCarousel = () => {
        // Calcula o deslocamento em pixels: (índice atual * largura do item)
        const offset = -currentCardIndex * cardWidthWithMargin;
        // Aplica o movimento usando CSS transform
        track.style.transform = `translateX(${offset}px)`;

        // Atualiza a visibilidade das setas
        // Esconde o botão "Anterior" se estiver no primeiro card
        prevButton.disabled = currentCardIndex === 0;
        
        // Esconde o botão "Próximo" se o último card visível for o último card do array
        // totalCards - cardsPerView é o índice máximo que o primeiro card visível pode ter.
        nextButton.disabled = currentCardIndex >= totalCards - cardsPerView;
    };

    const moveToNextCard = () => {
        if (currentCardIndex < totalCards - cardsPerView) {
            currentCardIndex++;
            updateCarousel();
        }
    };

    const moveToPrevCard = () => {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCarousel();
        }
    };

    // --- Event Listeners ---
    nextButton.addEventListener('click', moveToNextCard);
    prevButton.addEventListener('click', moveToPrevCard);

    // Inicializa o carrossel (garante que as setas estejam corretas ao carregar)
    updateCarousel(); 
});