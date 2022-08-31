// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
const username = prompt(`Qual o seu nome?`)
const comida1 = prompt(`Digite uma comida comida favorita sua:`)
const comida2 = prompt(`Digite mais uma comida comida favorita sua:`)
const comida3 = prompt(`Digite mais uma comida comida favorita sua:`)


//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
   
console.log (`Estas são as comidas favoritas de ${username}
- ${comida1}
- ${comida2}
- ${comida3}`)


// Você deve usar apenas um `console.log()` para isso

//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  

    