//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.//
const a = 5;
const b = 6;
console.log(a + b)

const a = 5;
const b = 6;
console.log(a - b)

const a = 5;
const b = 6;
console.log(a * b)

const a = 5;
const b = 6;
console.log(a / b)

const a = 5;
const b = 6;
console.log(a % b)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.//
const a = 8;
const b = 5;
if (a > b) {
    console.log("Este número e maior.")
} else {
    console.log("Este número e menor")
}
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.//
const a = 8;
const b = 4;
const c = 6;

if (a > b) {
    if (a > c) {
        maior = a;
    } else {
        maior = c;
    }
} else {
    if (b > c) {
        maior = b;
    } else {
        maior = c;
    }
} console.log(maior)

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.//
const a = 1;

if (a >= 1){
 console.log("positive")
} else{
    console("negative")
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//
