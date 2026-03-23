let lado1 = 10
let lado2 = 20
let area =  lado1 * lado2

if (lado1 == lado2){
    console.log("A área do quadrado é: " + area)
} 
else {
    console.log("A área do retangulo é: " + area)
}

//////////////////////////////////////////////////////////////

console.log("===============================================")

let temp = 0

let tempConvertida = ((temp * 1.8) + 32) + "F°"
console.log("A temperatura de " + temp + "C° é equivalente a " + tempConvertida)


//////////////////////////////////////////////////////////////

console.log("===============================================")


let nota1 = 7
let nota2 = 8
let nota3 = 6.5

let soma = (nota1 + nota2 + nota3) 
let media = soma/3

console.log("A media das notas é: " + media.toFixed(1));


//////////////////////////////////////////////////////////////

console.log("===============================================")

let reais = 100;
let valorDoDolar = 5.83;

let dolarConvertido = reais / valorDoDolar

console.log(reais + " reais é: " + dolarConvertido.toFixed(2) + " dólares");


//////////////////////////////////////////////////////////////

console.log("===============================================")



let precoBase = 100;
let descontoPorcentagem = 15;

let valorDesconto = (precoBase * descontoPorcentagem) / 100;
let precoFinal = precoBase - valorDesconto;

console.log("Preco Base: R$ " + precoBase);
console.log("Desconto: " + descontoPorcentagem + "% ou " + valorDesconto + "R$");
console.log("Preco final: R$ " + precoFinal);