let currentPokemonId = 1;

async function PassarPokemon() {
    currentPokemonId++;
    await FetchData(currentPokemonId);
}

async function VoltarPokemon() {
    if (currentPokemonId > 1) {
        currentPokemonId--;
        await FetchData(currentPokemonId);
    }
}

async function AleatorizadorPokemon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    currentPokemonId = Math.floor(Math.random() * (max - min) + min);

    await FetchData(currentPokemonId);
}

async function FetchData(id) {
    try {
        const response = await fetch(`/pokemon/${id}`);

        if (!response.ok) {
            throw new Error("Não foi possível encontrar esse Pokémon.");
        }

        const data = await response.json();

        document.getElementById("pokemonId").textContent = `ID: ${data.id}`;
        document.getElementById("pokemonNome").textContent = `Nome: ${data.name}`;
        document.getElementById("pokemonImagem").src = data.sprite;

    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        alert("Erro: " + error.message);  // ou exibir no próprio HTML
    }
}

document.addEventListener("DOMContentLoaded", () => {
    FetchData(1);
});
