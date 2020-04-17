function checaIdade(idade){

  return new Promise(function(resolve,error){

    setTimeout(function(){

        if(idade > 18){
            resolve(true);
        }
        else if(idade >= 0 ){
             resolve(false);
        }
        else{
            error("Não foi possível determinar a idade.")
        } 


    },2000);

    });
}

checaIdade(4)
.then( 
    function(val){

        if(val){
            console.log("Maior que 18");
        }
        else{
            console.log("Menor que 18");
        }
        
})
.catch(
    function(er)
    {
        console.warn(er);
    }
);