const pergunta1 = prompt("Você deseja seguir para área de Front-End ou seguir para a área de Back-End? Responda com o número 1 para Front-end ou 2 para Back-end");

if (pergunta1 == '1'){
    const respostaPerguntaFront = prompt(`Você quer aprender React ou aprender Vue?`);
    alert(`Que legal, ótima escolha gosto muito de ${respostaPerguntaFront}`);
}
if (pergunta1 == '2'){
    let respostaPerguntaBack = prompt(`Você quer aprender C# ou Java?`);
    alert(`Que legal, ótima escolha gosto muito de ${respostaPerguntaBack}`);
}

const pergunta3 = prompt("Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Responda 1 para especialização ou 2 para FullStack")

if (pergunta3 == '1'){
    alert('Ótima escolha, se especializar em uma área é essencial para profissionais qualificados.')
}
if (pergunta3 == '2'){
    alert('Profissionais FullStack estão em falta no mercado, parabéns pela escolha.')
}
let perguntaContinua = "ok";
while (perguntaContinua == 'ok'){
    let pergunta4 = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
    alert(`Otima escolha, você está no caminho certo, estudando e procurando saber mais sobre a linguagem ${pergunta4}`)
    perguntaContinua = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Responda ok(minusculo) pra continuar respondendo"); 
}