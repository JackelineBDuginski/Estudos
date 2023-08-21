const numero = 7;

let contador = 1;
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