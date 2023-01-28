//type boolean

const primeiroNumero = 5;
const segundoNumero = 15;

console.log(primeiroNumero === segundoNumero); //false

////////////// 

const texto1 = "Thiago";
const texto2 = `Vaz`; 

console.log(texto1 === texto2);

////////////// 

const texto3 = 'Computador';
const texto4 = "computador";
const textoMinusculo = texto3.toLowerCase();

console.log(texto3 === texto4);
console.log(texto4 === textoMinusculo);



// truthy ou falsy = 0 => false && true => 1

console.log( 0 == false);
console.log( '' == false);
console.log( 1 == false);



////////////// 

// null - vazio
// undefined

let minhaVar; //undefined
let varNull = null; // null, mas sendo valor de variavel
let numero = 3;
let texto = 'Alura';


console.log(minhaVar);
console.log(varNull);
console.log(typeof minhaVar);
console.log (typeof varNull);


