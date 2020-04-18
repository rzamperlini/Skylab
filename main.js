//REST operator

const usuario = {
    nome:"Rodrigo",
    idade:41,
    endereco:{
        rua:"Rua Tito Matos Loureiro.",
        cidade:"Aracruz",
        UF:"ES"
    }
}

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];

const [a,b,c,...d] = arr;

console.log(a);
console.log(b);
console.log(d);

function sum(a, b, ...rest){

    var total = rest.reduce((total,next)=> total + next );

    return a + b + total;
}

console.log(sum(1,2,3,4,5));


//SPREAD operator

const usuario1= {
    nome:"Diego",
    idade: 23,
    empresa: "Rocketseat"
}

const usuario2 = {...usuario1, nome:"Gabriel"};

console.log(usuario2);