const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://www.cheapshark.com/api/1.0/deals', {
            params: {
                pageSize: 20
            },
            timeout: 5000
        });

        const items = response.data || [];

        const jogosFormatados = items.map(item => {
            const precoNum = parseFloat(item.salePrice) * 5.5;
            return {
                name: item.title || 'Chave Steam',
                price: `R$ ${precoNum.toFixed(2).replace('.', ',')}`,
                image: item.thumb || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500'
            };
        });

        return res.status(200).json(jogosFormatados);
    } catch (error) {
        console.error('Erro ao buscar jogos:', error.message);
        return res.status(500).json({ error: 'Erro ao buscar jogos', details: error.message });
    }
};
