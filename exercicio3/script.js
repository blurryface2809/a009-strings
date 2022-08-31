// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```


// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const fraseJorge1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log (fraseJorge1)

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const fraseJorge2 = fraseJorge1.replace("verde","rosa").replace("azul","laranja")
console.log (fraseJorge2)

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

const incluiVerdeLaranja = fraseJorge2.includes("verde" && "laranja")
console.log (incluiVerdeLaranja)

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const gatoMaiusculo = fraseJorge2.replace("mas não deixe o gato sair" , "MAS NÃO DEIXE O GATO SAIR")
console.log (gatoMaiusculo)