// Transformando 


//conversao implicita
const numero = 456;
const numeroString = '456';

console.log (numero == numeroString);

console.log (numero + numeroString); // concatedou 


// coversao explicita 
//Number()
//String()
console.log(numero + Number(numeroString)); // 912
console.log(String(numero) + numeroString);456456