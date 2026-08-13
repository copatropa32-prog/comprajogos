module.exports = async (req, res) => {
    try {
        const jogosDestaque = [
            { name: "Baldur's Gate 3", price: "R$ 199,90", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500" },
            { name: "Cyberpunk 2077", price: "R$ 199,90", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500" },
            { name: "Hollow Knight", price: "R$ 46,99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" },
            { name: "Elden Ring", price: "R$ 229,90", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" },
            { name: "Counter-Strike 2", price: "Gratuito", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500" },
            { name: "Word Rescue", price: "R$ 15,90", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500" },
            { name: "Stardew Valley", price: "R$ 24,99", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500" },
            { name: "Terraria", price: "R$ 19,99", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500" }
        ];

        return res.status(200).json(jogosDestaque);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao retornar jogos' });
    }
};
