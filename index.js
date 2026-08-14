require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products', async (req, res) => {
  try {
    // Busca as 12 melhores ofertas atuais na CheapShark
    const response = await fetch('https://www.cheapshark.com/api/1.0/deals?pageNumber=0&pageSize=12&sortBy=Deal%20Rating');
    
    if (!response.ok) {
      throw new Error(`Erro na CheapShark API (${response.status})`);
    }

    const deals = await response.json();

    // Mapeando os dados para a nossa interface
    const products = deals.map(deal => ({
      id: deal.dealID,
      title: deal.title,
      thumb: deal.thumb,
      normalPrice: Number(deal.normalPrice).toFixed(2),
      salePrice: Number(deal.salePrice).toFixed(2),
      savings: Math.round(deal.savings),
      rating: deal.steamRatingPercent !== '0' ? deal.steamRatingPercent : null
    }));

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CompraJogos rodando com CheapShark em http://localhost:${PORT}`);
});
