const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const { MercadoPagoConfig, Preference } = require('mercadopago');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('.'));

const CLIENT_ID = '75702393897-88uv9hvhq0gi23n0vqk75m3.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

const mpClient = new MercadoPagoConfig({ accessToken: 'SEU_ACCESS_TOKEN_DO_MERCADO_PAGO' });

app.post('/api/auth/google', async (req, res) => {
    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        
        res.json({ 
            success: true, 
            user: { 
                name: payload.name, 
                email: payload.email, 
                picture: payload.picture 
            } 
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post('/api/criar-pagamento', async (req, res) => {
    try {
        const { title, price } = req.body;
        const preference = new Preference(mpClient);
        
        const result = await preference.create({
            body: {
                items: [
                    {
                        title: title,
                        quantity: 1,
                        unit_price: Number(price)
                    }
                ],
                back_urls: {
                    success: "https://comprajogos.com.br/sucesso.html",
                    failure: "https://comprajogos.com.br/falha.html",
                    pending: "https://comprajogos.com.br/pendente.html"
                },
                auto_return: "approved",
            }
        });

        res.json({ init_point: result.init_point });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
