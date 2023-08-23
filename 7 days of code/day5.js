let listaFrutas = [];
let listaCongelados = [];
let listaLaticineos = [];
let listaDoces = [];
let pergunta = '1';

while(pergunta == '1'){
    pergunta = prompt("Você deseja adicionar mais algum ítem na sua lista? Responda 1 para sim ou 2 para não");
    if (pergunta=='1') {
        let comida = prompt("Qual comida deseja inserir na sua lista de compras?");
        let categoria = prompt("Qual categoria essa comida se encaixa? Responda 1 para frutas, 2 para congelados, 3 para laticíneos, 4 para doces");
        if (categoria=='1'){
            listaFrutas.push(comida);
        }
        if (categoria=='2'){
            listaCongelados.push(comida);
        }
        if (categoria=='3'){
            listaLaticineos.push(comida);
        }
        if (categoria=='4'){
            listaDoces.push(comida);
        }
    }
    else {
        alert(`
            Lista de compras:
            Frutas: ${listaFrutas}
            Congelados: ${listaCongelados}
            Laticineos: ${listaLaticineos}
            Doces: ${listaDoces}`);
    }
}
