// Carregar Destaques (Pagos e Gratuitos com tratamento independente)
async function carregarDestaquesTopo() {
    const container = document.getElementById('destaques-grid');
    if (!container) return;

    container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Carregando destaques...</p>';

    let pagos = [];
    let gratis = [];

    // Busca jogos pagos (CheapShark)
    try {
        const resPagos = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=60&sortBy=Metacritic&pageSize=3');
        pagos = await resPagos.json();
    } catch (error) {
        console.error("Erro ao carregar jogos pagos:", error);
    }

    // Busca jogos gratuitos (FreeToGame) - isolado para não afetar os pagos se falhar
    try {
        const resGratis = await fetch('https://www.freetogame.com/api/games?sort=popularity');
        gratis = await resGratis.json();
    } catch (error) {
        console.error("Erro ao carregar jogos gratuitos:", error);
    }

    container.innerHTML = '';
    let totalCards = 0;

    // Renderizar jogos pagos
    if (Array.isArray(pagos) && pagos.length > 0) {
        pagos.slice(0, 3).forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'destaque-item';
            card.innerHTML = `
                <img src="${jogo.thumb}" alt="${jogo.title}">
                <div class="destaque-info">
                    <span class="badge pago">Oferta</span>
                    <h3>${jogo.title}</h3>
                    <p class="preco">R$ ${jogo.salePrice} <span class="de">R$ ${jogo.normalPrice}</span></p>
                    <a href="https://www.cheapshark.com/redirect?dealID=${jogo.dealID}" target="_blank" class="btn-comprar">Ver Oferta</a>
                </div>
            `;
            container.appendChild(card);
            totalCards++;
        });
    }

    // Renderizar jogos gratuitos
    if (Array.isArray(gratis) && gratis.length > 0) {
        gratis.slice(0, 3).forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'destaque-item';
            card.innerHTML = `
                <img src="${jogo.thumbnail}" alt="${jogo.title}">
                <div class="destaque-info">
                    <span class="badge gratis">Gratuito</span>
                    <h3>${jogo.title}</h3>
                    <p class="preco">Grátis</p>
                    <a href="${jogo.game_url}" target="_blank" class="btn-comprar">Jogar Agora</a>
                </div>
            `;
            container.appendChild(card);
            totalCards++;
        });
    }

    if (totalCards === 0) {
        container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Nenhum destaque disponível no momento.</p>';
    }
}

// Carregar Catálogo Geral (CheapShark API)
async function carregarCatalogo(termoBusca = '') {
    const container = document.getElementById('catalogo-grid');
    if (!container) return;

    container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Carregando catálogo...</p>';

    try {
        let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=12';
        if (termoBusca) {
            url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${encodeURIComponent(termoBusca)}&pageSize=12`;
        }

        const response = await fetch(url);
        const jogos = await response.json();

        container.innerHTML = '';

        if (!Array.isArray(jogos) || jogos.length === 0) {
            container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Nenhum jogo encontrado.</p>';
            return;
        }

        jogos.forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'jogo-card';
            card.innerHTML = `
                <img src="${jogo.thumb}" alt="${jogo.title}">
                <div class="jogo-info">
                    <span class="badge pago">Oferta</span>
                    <h3>${jogo.title}</h3>
                    <p class="preco">R$ ${jogo.salePrice} <span class="de">R$ ${jogo.normalPrice}</span></p>
                    <a href="https://www.cheapshark.com/redirect?dealID=${jogo.dealID}" target="_blank" class="btn-comprar">Ver Oferta</a>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar catálogo:", error);
        container.innerHTML = '<p style="color: #ff6b6b; grid-column: 1/-1; text-align: center;">Erro ao carregar o catálogo de jogos.</p>';
    }
}

// Configurar barra de pesquisa
function configurarPesquisa() {
    const input = document.getElementById('search-input');
    const btn = document.getElementById('search-btn');

    if (!btn || !input) return;

    const executarBusca = () => {
        const termo = input.value.trim();
        carregarCatalogo(termo);
    };

    btn.addEventListener('click', executarBusca);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            executarBusca();
        }
    });
}

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarDestaquesTopo();
    carregarCatalogo();
    configurarPesquisa();
});
