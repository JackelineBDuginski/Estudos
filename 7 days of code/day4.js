function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// o numero que a pessoa tem que acertar
const numero = getRandomIntInclusive(0, 10);

// o contador conta a quantidade de vezes que o while será executado
let contador = 1;

// while é uma estrutura de repetição
while(contador<=3){
    let chute=prompt('Chute um número de 0 a 10');
    if (chute==numero){
        alert('Parabéns, você acertou o número');
        contador = 7;
    }
    if (chute!=numero){
        alert('Você errou, tente novamente');
        contador = contador + 1;
    }
}
if (contador==4){
    alert(`Infelizmente não foi dessa vez, o número correto era ${numero}`);
}