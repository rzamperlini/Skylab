//ES6+ Módulo 01 - Exercício 03

// 3.1
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map(function(item) {
//  return item + 10;
// });
// console.log(newArr);

// const aux1 = arr.map(item => item + 10);
// console.log(aux1);

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }

// const idade = mostraIdade(usuario);
// console.log(idade);

// const aux2 = () =>  usuario.idade;
// console.log(aux2());

// 3.3
// Dica: Utilize uma constante pra function
/* const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
const user1 = mostraUsuario(nome, idade);
const user2 = mostraUsuario(nome);

console.log(user1);
console.log(user2);

const aux3 = (nome,idade=18) => ({nome:nome, idade:idade});
console.log(aux3(nome,idade));
console.log(aux3(nome));
 */

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

console.log(promise());
   
const auxPromise = new Promise((resolve, reject)=> resolve() );

console.log(auxPromise);