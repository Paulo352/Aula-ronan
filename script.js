let nome;
nome = prompt("Digite seu nome:");
if (nome) {
    alert("Olá, " + nome + "!");
}
else {
    alert("Olá, visitante!");
}

let idade = parseInt(prompt("Digite sua idade:"));
if (isNaN(idade)) {
    alert("Idade inválida. Por favor, digite um número.");
}
else if (idade < 18) {  
    alert("Você é menor de idade.");
}
else if (idade >= 18 && idade < 60) {
    alert("Você é adulto.");
}
else {
    alert("Você é idoso.");
}
let corFavorita = prompt("Digite sua cor favorita:");
if (corFavorita) {
    alert("Sua cor favorita é " + corFavorita + ".");
}
else {
    alert("Você não digitou uma cor favorita.");
}
let animalFavorito = prompt("Digite seu animal favorito:");
if (animalFavorito) {
    alert("Seu animal favorito é " + animalFavorito + ".");
}
else {
    alert("Você não digitou um animal favorito.");
}
let comidaFavorita = prompt("Digite sua comida favorita:");
if (comidaFavorita) {
    alert("Sua comida favorita é " + comidaFavorita + ".");
}
else {
    alert("Você não digitou uma comida favorita.");
}
let esporteFavorito = prompt("Digite seu esporte favorito:");
if (esporteFavorito) {
    alert("Seu esporte favorito é " + esporteFavorito + ".");
}
else {
    alert("Você não digitou um esporte favorito.");
}
let hobbyFavorito = prompt("Digite seu hobby favorito:");
if (hobbyFavorito) {
    alert("Seu hobby favorito é " + hobbyFavorito + ".");
}
else {
    alert("Você não digitou um hobby favorito.");
}
let musicaFavorita = prompt("Digite sua música favorita:");
if (musicaFavorita) {
    alert("Sua música favorita é " + musicaFavorita + ".");
}
else {
    alert("Você não digitou uma música favorita.");
}
let filmeFavorito = prompt("Digite seu filme favorito:");
if (filmeFavorito) {
    alert("Seu filme favorito é " + filmeFavorito + ".");
}
else {
    alert("Você não digitou um filme favorito.");
}
let livroFavorito = prompt("Digite seu livro favorito:");
if (livroFavorito) {
    alert("Seu livro favorito é " + livroFavorito + ".");
}
else {
    alert("Você não digitou um livro favorito.");
}
let viagemFavorita = prompt("Digite seu destino de viagem favorito:");
if (viagemFavorita) {
    alert("Seu destino de viagem favorito é " + viagemFavorita + ".");
}
else {
    alert("Você não digitou um destino de viagem favorito.");
}
let sonhoFavorito = prompt("Digite seu sonho favorito:");
if (sonhoFavorito) {
    alert("Seu sonho favorito é " + sonhoFavorito + ".");
}
else {
    alert("Você não digitou um sonho favorito.");
}
let objetivoFavorito = prompt("Digite seu objetivo favorito:");
if (objetivoFavorito) {
    alert("Seu objetivo favorito é " + objetivoFavorito + ".");
}
else {
    alert("Você não digitou um objetivo favorito.");
}
let fraseFavorita = prompt("Digite sua frase favorita:");
if (fraseFavorita) {
    alert("Sua frase favorita é: " + fraseFavorita + ".");
}
else {
    alert("Você não digitou uma frase favorita.");
}
let mensagemFinal = prompt("Digite uma mensagem final:");
if (mensagemFinal) {
    alert("Sua mensagem final é: " + mensagemFinal + ".");
}
else {
    alert("Você não digitou uma mensagem final.");
}
let agradecimento = prompt("Digite uma palavra de agradecimento:");
if (agradecimento) {
    alert("Obrigado por compartilhar: " + agradecimento + ".");
}
else {
    alert("Você não digitou uma palavra de agradecimento.");
}
let despedida = prompt("Digite uma palavra de despedida:");
if (despedida) {
    alert("Até logo! " + despedida + ".");
}
else {
    alert("Você não digitou uma palavra de despedida.");
}
let mensagemFinal2 = prompt("Digite uma mensagem final para encerrar:");
if (mensagemFinal2) {
    alert("Sua mensagem final é: " + mensagemFinal2 + ".");
}
else {
    alert("Você não digitou uma mensagem final.");
}
let agradecimentoFinal = prompt("Digite uma palavra de agradecimento final:");
if (agradecimentoFinal) {
    alert("Obrigado por tudo: " + agradecimentoFinal + ".");
}
else {
    alert("Você não digitou uma palavra de agradecimento final.");
}
let despedidaFinal = prompt("Digite uma palavra de despedida final:");
if (despedidaFinal) {
    alert("Até a próxima! " + despedidaFinal + ".");
}
else {
    alert("Você não digitou uma palavra de despedida final.");
}
let mensagemFinal3 = prompt("Digite uma mensagem final para concluir:");
if (mensagemFinal3) {
    alert("Sua mensagem final é: " + mensagemFinal3 + ".");
}
else {
    alert("Você não digitou uma mensagem final.");
}
let agradecimentoFinal2 = prompt("Digite uma palavra de agradecimento final para concluir:");
if (agradecimentoFinal2) {
    alert("Obrigado por tudo: " + agradecimentoFinal2 + ".");
}
else {
    alert("Você não digitou uma palavra de agradecimento final.");
}
let despedidaFinal2 = prompt("Digite uma palavra de despedida final para concluir:");
if (despedidaFinal2) {
    alert("Até a próxima! " + despedidaFinal2 + ".");
}
else {
    alert("Você não digitou uma palavra de despedida final.");
}

let número
número = parseInt(prompt("Digite um número:"));
if (isNaN(número)) {
    alert("Número inválido. Por favor, digite um número.");
}
else if (número % 2 === 0) {
    alert("O número " + número + " é par.");
}
else {
    alert("O número " + número + " é ímpar.");
}
let número2 = parseInt(prompt("Digite outro número:"));
if (isNaN(número2)) {
    alert("Número inválido. Por favor, digite um número.");
}
else if (número2 > 0) {
    alert("O número " + número2 + " é positivo.");
}
else if (número2 < 0) { 
    alert("O número " + número2 + " é negativo.");
}
else {
    alert("O número " + número2 + " é zero.");
}
let número3 = parseInt(prompt("Digite mais um número:"));
if (isNaN(número3)) {
    alert("Número inválido. Por favor, digite um número.");
}
else if (número3 > 100) {
    alert("O número " + número3 + " é maior que 100.");
}
else if (número3 < 100) {
    alert("O número " + número3 + " é menor que 100.");
}
else {
    alert("O número " + número3 + " é igual a 100.");
}
let número4 = parseInt(prompt("Digite mais um número:"));
if (isNaN(número4)) {
    alert("Número inválido. Por favor, digite um número.");
}
else if (número4 % 5 === 0) {   
    alert("O número " + número4 + " é múltiplo de 5.");
}   