//ES6+ Módulo 01 - Exercício 01

class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(...params){
        super(params[0],params[1]);

        this.admin = true;
    }
}

const user1 = new Usuario('email@teste.com', 'senha123');
const adm1 = new Admin('email@teste.com','senha123');

console.log(user1.isAdmin());
console.log(user1);
console.log(adm1.isAdmin());
console.log(adm1);