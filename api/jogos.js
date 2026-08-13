const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const apiKey = process.env.KINGUIN_API_KEY_WSL || process.env.KINGUIN_API_KEY;

        // Tentativa na rota v1/products ou v2 se aplicável
        const response = await axios.get('https://api.kinguin.net/v2/store/products', {
            headers: {
                'Api-Key': apiKey
            },
            params: {
                limit: 20
            },
            timeout: 5000
        });

        let rawData = response.data;
        let items = [];

        if (Array.isArray(rawData)) {
            items = rawData;
        } else if (rawData && Array.isArray(rawData.results)) {
            items = rawData.results;
        } else if (rawData && Array.isArray(rawData.items)) {
            items = rawData.items;
        } else if (rawData) {
            items = [rawData];
        }

        const jogosFormatados = items.map(item => {
            return {
                name: item.name || item.productName || 'Chave Steam',
                price: item.price ? `R$ ${(item.price * 5.5).toFixed(2).replace('.', ',')}` : 'R$ 49,90',
                image: item.cover || item.image || item.screenshots?.[0] || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500'
            };
        });

        return res.status(200).json(jogosFormatados);
    } catch (error) {
        console.error('Erro na API Kinguin:', error.message);
        return res.status(500).json({ error: 'Erro ao buscar jogos', details: error.message });
    }
};
