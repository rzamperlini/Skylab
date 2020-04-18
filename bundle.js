"use strict";

var usuario = {
  nome: "Rodrigo",
  idade: 41,
  endereco: {
    rua: "Rua Tito Matos Loureiro.",
    cidade: "Aracruz",
    UF: "ES"
  }
};

function mostraDados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraDados(usuario);
