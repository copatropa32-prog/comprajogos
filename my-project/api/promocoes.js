export default function handler(req, res) {
  // 1. Configura os cabeçalhos primeiro
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // 2. Declara os dados das promoções
  const promocoes = [
    { 
      id: 1, 
      title: 'Cyber Racer: Neon Edition', 
      platform: 'PC', 
      cover: 'https://picsum.photos/seed/1/600/400', 
      price: 24.99, 
      oldPrice: 59.99, 
      discount: 58, 
      affiliateUrl: '#' 
    },
    { 
      id: 2, 
      title: 'Dungeon Quest', 
      platform: 'Steam', 
      cover: 'https://picsum.photos/seed/2/600/400', 
      price: 9.99, 
      oldPrice: 39.99, 
      discount: 75, 
      affiliateUrl: '#' 
    },
    { 
      id: 3, 
      title: 'Space Odyssey', 
      platform: 'Epic', 
      cover: 'https://picsum.photos/seed/3/600/400', 
      price: 14.99, 
      oldPrice: 49.99, 
      discount: 70, 
      affiliateUrl: '#' 
    }
  ];

  // 3. Retorna a resposta por último
  return res.status(200).json({
    success: true,
    items: promocoes
  });
}