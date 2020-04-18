"use strict";

//ES6+ Módulo 01 - Exercício 02
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades);
var usrRocket = usuarios.filter(function (usuario) {
  if (usuario.empresa === 'Rocketseat' && usuario.idade > 18) {
    return usuario;
  }
});
console.log(usrRocket);
var usrGoogle = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log(usrGoogle);
var result = usuarios.map(function (usuario) {
  usuario.idade *= 2;
  return usuario;
}).filter(function (usuario) {
  if (usuario.idade < 50) return usuario;
});
console.log(result);
