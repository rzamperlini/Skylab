//ES6+ - Módulo 03 - Exercício 03

import axios from "axios";

// class Github {
//     static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//     .then(response => {
//     console.log(response.data);
//     })
//     .catch(err => {
//     console.log('Repositório não existe');
//     })
//     }
//    }

class Github{
    static async getRepositories(repo){
        try{
            const response = await axios.get(`https://api.github.com/users/${repo}/repos`);

            console.log(response.data);
        }
        catch(err){
            console.log('Repositório não existe.');
        }
    }
}

Github.getRepositories('diego3g');
Github.getRepositories('rzamperlini');