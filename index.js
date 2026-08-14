// Carregar Destaques (Jogos Pagos e Gratuitos das APIs Reais)
async function carregarDestaquesTopo() {
    const container = document.getElementById('destaques-grid');
    if (!container) return;

    try {
        // Requisição para CheapShark (Jogos pagos em oferta)
        const resPagos = await fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=60&sortBy=Metacritic&pageSize=3');
        const pagos = await resPagos.json();

        // Requisição para FreeToGame (Jogos gratuitos)
        const resGratis = await fetch('https://www.freetogame.com/api/games?sort=popularity');
        const gratis = await resGratis.json();

        container.innerHTML = '';

        let itensRenderizados = 0;

        // Adicionar até 3 pagos
        if (Array.isArray(pagos)) {
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
                itensRenderizados++;
            });
        }

        // Adicionar até 3 gratuitos
        if (Array.isArray(gratis)) {
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
                itensRenderizados++;
            });
        }

        if (itensRenderizados === 0) {
            container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Nenhum destaque encontrado nas APIs.</p>';
        }

    } catch (error) {
        console.error("Erro ao carregar destaques das APIs:", error);
        container.innerHTML = '<p style="color: #ff6b6b; grid-column: 1/-1; text-align: center;">Erro ao conectar com as APIs de jogos.</p>';
    }
}

// Carregar Catálogo Geral (CheapShark API)
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

        if (!Array.isArray(jogos) || jogos.length === 0) {
            container.innerHTML = '<p style="color: #aaa; grid-column: 1/-1; text-align: center;">Nenhum jogo encontrado na busca.</p>';
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
        console.error("Erro ao carregar catálogo da API:", error);
        container.innerHTML = '<p style="color: #ff6b6b; grid-column: 1/-1; text-align: center;">Erro ao carregar o catálogo de jogos.</p>';
    }
}

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

document.addEventListener('DOMContentLoaded', () => {
    carregarDestaquesTopo();
    carregarCatalogo();
    configurarPesquisa();
});
