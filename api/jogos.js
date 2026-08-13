const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    try {
        const filePath = path.join(process.cwd(), 'jogos.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const jogos = JSON.parse(fileData);
        return res.status(200).json(jogos);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao carregar catálogo local' });
    }
};
