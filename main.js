const arr = [1,3,4,5,6];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({nome:"Rodrigo"});

console.log(teste());

const soma = (a=3, b=6) => a + b;

console.log(soma(1));
console.log(soma());