const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        const jogosApi = response.data.slice(0, 12); // Pega os 12 primeiros jogos

        const jogosFormatados = jogosApi.map(jogo => ({
            name: jogo.title,
            price: "Gratuito",
            image: jogo.thumbnail
        }));

        return res.status(200).json(jogosFormatados);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar jogos' });
    }
};
