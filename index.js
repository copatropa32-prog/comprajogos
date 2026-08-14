// Função para carregar e mesclar os destaques no topo
async function carregarDestaquesTopo() {
    const container = document.getElementById('destaques-grid');
    if (!container) return;

    try {
        const resPagos = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=60&sortBy=Metacritic&pageSize=4');
        const pagos = await resPagos.json();

        const resGratis = await fetch('https://www.freetogame.com/api/games?sort=popularity');
        const gratis = await resGratis.json();

        const topPagos = pagos.slice(0, 3);
        const topGratis = gratis.slice(0, 3);

        const destaquesMisturados = [];
        for (let i = 0; i < 3; i++) {
            if (topPagos[i]) destaquesMisturados.push({ ...topPagos[i], tipo: 'pago' });
            if (topGratis[i]) destaquesMisturados.push({ ...topGratis[i], tipo: 'gratis' });
        }

        container.innerHTML = '';

        destaquesMisturados.forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'destaque-item';

            if (jogo.tipo === 'pago') {
                card.innerHTML = `
                    <img src="${jogo.thumb}" alt="${jogo.title}">
                    <div class="destaque-info">
                        <span class="badge pago">Oferta</span>
                        <h3>${jogo.title}</h3>
                        <p class="preco">R$ ${jogo.salePrice} <span class="de">R$ ${jogo.normalPrice}</span></p>
                        <a href="https://www.cheapshark.com/redirect?dealID=${jogo.dealID}" target="_blank" class="btn-comprar">Ver Oferta</a>
                    </div>
                `;
            } else {
                card.innerHTML = `
                    <img src="${jogo.thumbnail}" alt="${jogo.title}">
                    <div class="destaque-info">
                        <span class="badge gratis">Gratuito</span>
                        <h3>${jogo.title}</h3>
                        <p class="preco">Grátis</p>
                        <a href="${jogo.game_url}" target="_blank" class="btn-comprar">Jogar Agora</a>
                    </div>
                `;
            }

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar destaques:", error);
    }
}

// Função para carregar o catálogo geral
async function carregarCatalogo(termoBusca = '') {
    const container = document.getElementById('catalogo-grid');
    if (!container) return;

    try {
        let url = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=12';
        if (termoBusca) {
            url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${encodeURIComponent(termoBusca)}&pageSize=12`;
        }

        const response = await fetch(url);
        const jogos = await response.json();

        container.innerHTML = '';

        if (jogos.length === 0) {
            container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Nenhum jogo encontrado.</p>';
            return;
        }

        jogos.forEach(jogo => {
            const card = document.createElement('div');
            card.className = 'jogo-card';
            card.innerHTML = `
                <img src="${jogo.thumb}" alt="${jogo.title}">
                <div class="jogo-info">
                    <span class="badge pago">Jogo / Oferta</span>
                    <h3>${jogo.title}</h3>
                    <p class="preco">R$ ${jogo.salePrice} <span class="de">R$ ${jogo.normalPrice}</span></p>
                    <a href="https://www.cheapshark.com/redirect?dealID=${jogo.dealID}" target="_blank" class="btn-comprar">Ver Oferta</a>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao carregar catálogo:", error);
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
