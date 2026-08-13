const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://api.kinguin.net/v1/products', {
      headers: {
        'X-Api-Key': process.env.KINGUIN_API_KEY
      },
      params: {
        limit: 20
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar jogos', details: error.message });
  }
};

