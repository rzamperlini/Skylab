const usuario = {
    nome:"Rodrigo",
    idade:41,
    endereco:{
        rua:"Rua Tito Matos Loureiro.",
        cidade:"Aracruz",
        UF:"ES"
    }
}

function mostraDados({nome, idade, endereco:{cidade}}){
    console.log(nome, idade, cidade);
}

mostraDados(usuario);