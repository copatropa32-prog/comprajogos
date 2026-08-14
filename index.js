require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = 'https://sandbox.codeswholesale.com';

app.use(express.static(path.join(__dirname, 'public')));

async function getAccessToken() {
  const clientId = process.env.CODESWHOLESALE_CLIENT_ID;
  const clientSecret = process.env.CODESWHOLESALE_CLIENT_SECRET;

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);

  const response = await fetch(`${BASE_URL}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  });

  if (!response.ok) {
    throw new Error(`Erro Auth: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.access_token;
}

app.get('/api/products', async (req, res) => {
  try {
    const token = await getAccessToken();
    const prodRes = await fetch(`${BASE_URL}/v1/products`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }
    });

    const products = await prodRes.json();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
