//ES6+ - Módulo 03 - Async/Await

const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('TESTE')},2000);
});

// minhaPromise().then(response=> {console.log(response)})
//                 .catch(err => {});


async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();





