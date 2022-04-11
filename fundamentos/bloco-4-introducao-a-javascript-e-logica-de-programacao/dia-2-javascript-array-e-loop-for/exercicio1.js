//1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;//
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}
//2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);
//3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let summers = 0
for (let index = 0; index < numbers.length; index++) {
    summers += numbers[index];
}
let resultado = summers / numbers.length
console.log("Media Aritimétca: " + resultado)

//4 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let summers = 0
for (let index = 0; index < numbers.length; index++) {
    summers += numbers[index];
}
let resultado = summers / numbers.length
console.log("Media Aritimétca: " + resultado)

if (resultado > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let maior = 0
//for (let index = 0; index < numbers.length; index ++){
//  if (numbers[index]> numbers[i])
//}

//5 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}





let fruits = [3, 4, 10, 1, 12];
let valor = 0;

for (let index = 0; index < fruits.length; index += 1) {
    valor += fruits[index];
    if (valor > 15) {
        console.log(valor)
    } else {
        console.log("valor menor que 16.")
    }

}
//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 


// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'banana';
let index = '';

for (let indice = 0; indice <= word.length; indice++) {
    index += word.charAt(word.length - indice);
}

console.log(index);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];