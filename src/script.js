//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio

function previousPokemon() {
  alert("Pokemon Anterior");
  //abra o terminal em inspecionar no chrome para visualizar
  console.log("Pokemon Anterior");
}

function nextPokemon() {
  alert("Pokemon Seguinte");
  //abra o terminal em inspecionar no chrome para visualizar
  console.log("Pokemon Seguinte");
}
