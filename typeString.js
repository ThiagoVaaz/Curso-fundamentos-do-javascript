const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const idade = "22 anos";
const meuNome = "Thiago";

const citacao = "Meu nome é";
console.log(citacao);



//concatenação 
console.log(citacao + meuNome);



//template String ou template literal 

const cifrao = `\u0024`;
const aMaiusculo = `\u0041`;
const tique = `\u2705`;
const hiragana = `\u3041`;

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);



//comparação entre strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true
console.log(cidade === input); // false



// length

const senha = "minhaSenha12345"
console.log(senha.length)