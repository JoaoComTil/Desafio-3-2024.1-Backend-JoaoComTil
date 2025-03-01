const express = require("express");
const app = express();
const path = require("path");


app.use(express.static(path.join(__dirname, 'public')));

app.get('/pokemon/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
            return res.status(404).json({ error: "Não foi possível encontrar esse Pokémon." });
        }

        const data = await response.json();

        res.json({
            id: data.id,
            name: data.name,
            sprite: data.sprites.front_default
        });
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error.message);
        res.status(500).json({ error: "Erro interno ao buscar Pokémon." });
    }
});

app.listen(8081, () => {
    console.log('Servidor rodando em http://localhost:8081');
});
