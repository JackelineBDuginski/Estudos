// var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let forma = 'triângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'quadrado') {
//     area = altura * comprimento;
// }   else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

// If (se): está fazendo uma comparação da "const forma = quadrado", vai executar o cálculo da área referente ao quadrado 
// else (se não): vai apresentar o cálculo da área de um triângulo.

if (forma === 'quadrado') {
    area = altura * comprimento;
}   else {
    area = (altura * comprimento) / 2;
}

console.log(area)