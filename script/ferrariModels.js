
document.addEventListener('DOMContentLoaded', () => {
    const carData = {
        // CARRO 1: FERRARI SF90
        'sf90-vermelha': {
            title: 'FERRARI <span class="car-model-red">SF90</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/sf90-1.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-2.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-3.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-4.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-5.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-6.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-7.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-8.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-9.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-10.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-11.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-12.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-13.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-14.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-15.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-16.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-17.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-18.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-19.jpg',
                'https://luancostaf.github.io/bricole/assets/sf90-20.jpg'
            ], 
            details: {
                cidade: 'Brasília - DF',
                motor: '3.9 V8 TURBO PHEV SPIDER F1-DCT',
                ano: '2021/2022',
                km: '6.733',
                cambio: 'Automática',
                carroceria: 'Conversível',
                combustivel: 'Gasolina e elétrico',
                cor: 'Vermelho',
                preco: 'R$ 4.950.000',
                descricao: 'A SF90 Stradale é o primeiro modelo híbrido plug-in de produção em série da Ferrari. O nome homenageia os 90 anos da Scuderia Ferrari. Equipada com um motor V8 biturbo e três propulsores elétricos, ela entrega uma potência combinada de 1.000 cavalos, alcançando 0 a 100 km/h em apenas 2,5 segundos. É o supercarro mais potente da marca feito para as estradas.'
            }
        },
        
        // CARRO 2: FERRARI F8-TRIBUTO
        'f8-tributo': {
            title: 'FERRARI <span class="car-model-red">F8-TRIBUTO</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/f8-1.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-2.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-3.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-4.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-5.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-6.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-7.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-8.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-9.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-10.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-11.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-12.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-13.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-14.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-15.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-16.jpg',
                'https://luancostaf.github.io/bricole/assets/f8-17.jpg'
            ], 
            details: {
                cidade: 'Belo Horizonte - MG',
                motor: '3.9 V8 TURBO GASOLINA F1-DCT',
                ano: '2021/2022',
                km: '4.000',
                cambio: 'Automática',
                carroceria: 'Cupê',
                combustivel: 'Gasolina',
                cor: 'Amarelo',
                preco: 'R$ 4.500.000',
                descricao: 'A Ferrari F8 Tributo é uma homenagem ao motor V8 mais potente já produzido pela marca italiana. Sucessora da 488 GTB, ela é um supercarro de motor central que combina aerodinâmica avançada e peso reduzido. Seu motor V8 twin-turbo de 3.9 litros entrega 720 cavalos de potência e acelera de 0 a 100 km/h em apenas 2,9 segundos. A F8 Tributo é o ápice da performance da Ferrari com motor V8, projetada para ser um carro de corrida homologado para as ruas.'
            }
        },

        // CARRO 3: FERRARI 296-GTB
        '296-GTB': {
            title: 'FERRARI <span class="car-model-red">296 GTB</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/gtb-1.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-2.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-3.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-4.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-5.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-6.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-7.jpg',
                'https://luancostaf.github.io/bricole/assets/gtb-8.jpg'
            ],
            details: {
                cidade: 'Belo Horizonte - MG',
                motor: '3.0 V6 TURBO PHEV F1-DCT',
                ano: '2022/2022',
                km: '2.419',
                cambio: 'Automática',
                carroceria: 'Cupê',
                combustivel: 'Gasolina e elétrico',
                cor: 'Vermelho',
                preco: 'R$ 3.300.000',
                descricao: 'A Ferrari 296 GTB (Gran Turismo Berlinetta) marca a estreia de um novo motor V6 twin-turbo da Ferrari, resgatando a linhagem de carros esportivos de motor central. É um híbrido plug-in (PHEV) que, juntamente com o motor elétrico, atinge uma potência combinada de 830 cavalos. Leve e focada na agilidade, a 296 GTB é descrita pela Ferrari como uma "revolução" no prazer de dirigir, oferecendo aceleração de 0 a 100 km/h em 2,9 segundos e uma experiência de condução incrivelmente envolvente.'
            }
        },

        // CARRO 4: FERRARI 296-GTS
        '296-GTS': {
            title: 'FERRARI <span class="car-model-red">296 GTS</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/gts-1.jpg',
                'https://luancostaf.github.io/bricole/assets/gts-2.jpg',
                'https://luancostaf.github.io/bricole/assets/gts-3.jpg'
            ],
            details: {
                cidade: 'Belo Horizonte - MG',
                motor: '3.0 V6 TURBO PHEV F1-DCT',
                ano: '2024/2024',
                km: '100',
                cambio: 'Automática',
                carroceria: 'Conversível',
                combustivel: 'Gasolina e elétrico',
                cor: 'Preto',
                preco: 'R$ 5.000.000',
                descricao: 'A Ferrari 296 GTS é a versão conversível (Spider) da 296 GTB. Ela mantém toda a potência e a tecnologia híbrida plug-in do cupê, mas com a adição de um teto rígido retrátil (RHT) que garante a experiência de direção a céu aberto. Seu powertrain combina um motor V6 biturbo com um motor elétrico, entregando impressionantes 830 cavalos de potência. A 296 GTS oferece o som inconfundível do novo V6 da Ferrari e acelera de 0 a 100 km/h em apenas 2,9 segundos, unindo alta performance e a emoção da condução conversível.'
            }
        },

        // CARRO 5: FERRARI 12CILINDRI
        '12-cilindri': {
            title: 'FERRARI <span class="car-model-red">12CILINDRI</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/12cilindri-1.jpg',
                'https://luancostaf.github.io/bricole/assets/12cilindri-2.jpg',
                'https://luancostaf.github.io/bricole/assets/12cilindri-3.jpg',
                'https://luancostaf.github.io/bricole/assets/12cilindri-4.jpg',
                'https://luancostaf.github.io/bricole/assets/12cilindri-5.jpg',
                'https://luancostaf.github.io/bricole/assets/12cilindri-6.jpg'
            ],
            details: {
                cidade: 'Balneário Camboriú - SC',
                motor: '6.5 V12 GASOLINA F1-DCT',
                ano: '2025/2025',
                km: '0',
                cambio: 'Automática',
                carroceria: 'Cupê',
                combustivel: 'Gasolina',
                cor: 'Azul',
                preco: 'R$ 6.500.000',
                descricao: 'A Ferrari 12Cilindri é o mais recente modelo V12 de dois lugares com motor dianteiro-central, celebrando a essência da Ferrari de forma pura. Ela é a sucessora da 812 Superfast. Seu nome faz referência direta ao motor V12 de aspiração natural mais potente já produzido pela marca, que atinge altíssimas rotações. Sem assistência híbrida, a 12Cilindri foca em entregar uma experiência de direção visceral e um som inigualável, combinando design elegante e tecnologia aerodinâmica de ponta.'
            }
        },

        // CARRO 5: FERRARI PUROSANGUE
        'Purosangue': {
            title: 'FERRARI <span class="car-model-red">PUROSANGUE</span>',
            images: [
                'https://luancostaf.github.io/bricole/assets/purosangue-1.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-2.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-3.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-4.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-5.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-6.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-7.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-8.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-9.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-10.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-11.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-12.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-13.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-14.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-15.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-16.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-17.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-18.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-19.jpg',
                'https://luancostaf.github.io/bricole/assets/purosangue-20.jpg'
            ],
            details: {
                cidade: 'Belo Horizonte - MG',
                motor: '6.5 V12 GASOLINA F1-DCT',
                ano: '2024/2025',
                km: '820',
                cambio: 'Automática',
                carroceria: 'Utilitário esportivo',
                combustivel: 'Gasolina',
                cor: 'Vermelho',
                preco: 'R$ 8.500.000',
                descricao: 'A Ferrari Purosangue (que significa "puro-sangue" em italiano) é o primeiro carro da Ferrari com quatro portas e quatro lugares. Embora a Ferrari se refira a ele como um FUV (Ferrari Utility Vehicle) e não um SUV, ele representa a entrada da marca em um novo segmento. A Purosangue é movida por um motor V12 de aspiração natural montado na frente, entregando potência e som característicos da marca, e conta com um avançado sistema de suspensão ativa. Este modelo combina o conforto de um carro familiar com a performance e o luxo de um verdadeiro esportivo de Maranello.'
            }
        }
        // ADICIONE OUTROS CARROS AQUI...
    };

    // 2. SELETORES DE ELEMENTOS
    const modal = document.getElementById('car-modal');
    const closeButton = document.querySelector('.close-button');
    const discoverButtons = document.querySelectorAll('.discover-button');
    
    // Elementos Internos do Modal
    const modalTitle = document.getElementById('modal-title');
    const modalDetails = document.getElementById('modal-details');

    // Elementos do Carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    let currentSlide = 0;
    let totalSlides = 0; // Será atualizado dinamicamente
    
    // 3. LÓGICA DO CARROSSEL
    const moveCarousel = () => {
        // Garante que slides existam para evitar erros
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;

        // Recalcula a largura do slide sempre, para responsividade
        const slideWidth = slides[0].clientWidth; 
        carouselTrack.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
    };

    // Botões de navegação do Carrossel
    prevButton.addEventListener('click', () => {
        if (totalSlides > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            moveCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (totalSlides > 0) {
            currentSlide = (currentSlide + 1) % totalSlides;
            moveCarousel();
        }
    });

    // Atualiza a posição em caso de redimensionamento da janela
    window.addEventListener('resize', () => {
        if (modal.style.display === 'block') {
            moveCarousel();
        }
    });

    // 4. LÓGICA DE CARREGAMENTO DO MODAL
    const loadCarContent = (carId) => {
        const car = carData[carId];
        if (!car) {
            console.error(`Dados do carro com ID ${carId} não encontrados no carData.`);
            return;
        }

        // A. CARREGA O TÍTULO
        modalTitle.innerHTML = car.title;

        // B. CARREGA O CARROSSEL (Recria os slides)
        carouselTrack.innerHTML = ''; // Limpa o conteúdo anterior
        car.images.forEach(imgSrc => {
            const slide = document.createElement('div');
            slide.classList.add('carousel-slide');
            slide.innerHTML = `<img src="${imgSrc}" class="carousel-image">`;
            carouselTrack.appendChild(slide);
        });
        
        // C. ATUALIZA VARIAVEIS DO CARROSSEL e reseta a posição
        totalSlides = car.images.length;
        currentSlide = 0; 
        
        // Garante que o carrossel se ajuste à largura do novo conteúdo
        // Usa setTimeout para dar tempo ao navegador de renderizar os novos slides
        setTimeout(moveCarousel, 50); 
        
        // D. CARREGA OS DETALHES
        const details = car.details;
        modalDetails.innerHTML = `
            <div class="detail-row">
                <div><span class="detail-label">Cidade:</span> ${details.cidade}</div>
                <div><span class="detail-label">${details.motor}</div>
            </div>
            <div class="detail-row">
                <div><span class="detail-label">Ano:</span> ${details.ano}</div>
                <div><span class="detail-label">KM:</span> ${details.km}</div>
                <div><span class="detail-label">Câmbio:</span> ${details.cambio}</div>
                <div><span class="detail-label">Carroceria:</span> ${details.carroceria}</div>
                <div><span class="detail-label">Combustivel:</span> ${details.combustivel}</div>
                <div><span class="detail-label">Cor:</span> ${details.cor}</div>
            </div>
            
            <div class="price">${details.preco}</div>
            <p class="description">Sobre o carro: ${details.descricao}</p>
        `;

        // E. ABRE O MODAL
        modal.style.display = 'block';
    };

    // 5. EVENTOS: ABRIR E FECHAR
    // Itera sobre todos os botões DISCOVER MORE e anexa o evento de clique
    discoverButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const carId = event.target.getAttribute('data-car');
            loadCarContent(carId);
        });
    });

    // Fechar Modal ao clicar no 'X'
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar Modal ao clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
