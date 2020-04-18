"use strict";

//ES6+ Módulo 01 - Exercício 04
//4.1

/* const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

const {nome, endereco:{cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
 */
//4.2
function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

var aux = mostraInfo({
  nome: 'Diego',
  idade: 23
});
console.log(aux);
