// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```


// c) Substitua os traços `________` por “sticioso”.


// a) Remova o excesso de espaços no final da string;

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log (minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

const minhaStringTrim = (minhaString.trim()) 

console.log ((minhaString.length) , (minhaStringTrim.length))

// c) Substitua os traços `________` por “sticioso”.

console.log (minhaStringTrim.replace("________", "sticioso"))