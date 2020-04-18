//ES6+ Módulo 01 - Exercício 02

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(usuario => (usuario.idade));

console.log(idades);

const usrRocket = usuarios.filter(usuario => {
    if(usuario.empresa === 'Rocketseat' && usuario.idade > 18){
        return usuario;
    }
})

console.log(usrRocket);

const usrGoogle = usuarios.find(usuario  => usuario.empresa === 'Google');

console.log(usrGoogle);

const result = usuarios.map(usuario => {
                                usuario.idade *= 2;
                                return usuario; })
                        .filter(usuario => {
                                if(usuario.idade < 50)
                                    return usuario;});


console.log(result);