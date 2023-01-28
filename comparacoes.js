// == (comparação implícita)

const numero = 5;
const texto = ('5');

console.log(numero == texto);
console.log(numero === texto);

//tipo de dado
console.log(typeof numero);
console.log(typeof texto);

// == compara apenas o valor 
// === compara o valor e o tipo de dado


//conversão explícita 

Number();
String()

console.log(numero === Number(texto));i