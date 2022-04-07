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