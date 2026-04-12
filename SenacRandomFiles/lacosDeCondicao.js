//////////////////
//ATIVIDADE 1
//////////////////


let idade = 22

switch (true) {

    case idade >= 18:
        console.log ("Pode ir no bar do milagre")
        break;

    case idade < 18:
        console.log("Ate pode ir mas cuida")
        break;

    default:
        console.log("Idade Invalida bro, Mas aparece la")
        break;
}


//////////////////
//ATIVIDADE 2
//////////////////

let peso = 72
let altura = 1.5

let imc = peso / (altura ** 2)

console.log("Seu IMC é: " + imc)

if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}


///////// atvdade 3 

let numero = 15

if (numero > 0) {
    console.log("Positivo")
} else if (numero < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}

///// atvdade 4

let opcao = 1

if (opcao === 1) {
    console.log("Café")

} else if (opcao === 2) {
    console.log("Chá")

} else if (opcao === 3) {
    console.log("Água")

} else if (opcao === 4) {
    console.log("Sucosz ")

} else {
    console.log("Opção inválida")
}


/////////////x


let mensagem = "oi" 

if (mensagem === "oi" || mensagem === "ola") {
    console.log("Olá! Como posso te ajudar?")

} else if (mensagem === "tudo bem?") {
    console.log("Tudo ótimo! E você?")

} else if (mensagem === "qual seu nome?") {
    console.log("Meu nome é AAAAAAAAAAAAA")

} else if (mensagem === "tchau") {
    console.log("Até mais!")

} else {
    console.log("Não entendi sua mensagem...")
}