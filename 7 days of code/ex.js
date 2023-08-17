const quantidadeGato = prompt("Quantos gatos você tem?");
const perguntaGatos = prompt("Você gostaria de ter mais gatos? Responda com o número 1 para SIM ou 2 para NÃO");


if (perguntaGatos == '1'){
    const respostaPergunta = prompt(`Qual o nome do novo gato?`);
    alert(`Que legal esse nome, gosto muito de ${respostaPergunta}`);
}
if (perguntaGatos == '2'){
    alert("A quantidade de gatos já está boa mesmo né");
}