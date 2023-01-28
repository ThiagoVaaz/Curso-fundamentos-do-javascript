//function apresentar (nome) {
//    return `meu nome é ${nome}`;
//}
//
//console.log(apresentar("thiago"));


// Arrow Function
//sempre const

const apresentarArrow = nome => `meu nome é ${nome}`;
console.log(apresentarArrow("thiago"));


const soma = (num1, num2) => num1 + num2;
console.log(soma(2, 3)); //5



//Arrow function com + de 1 linha  de instrução 

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 +num2;
    }
}

console.log(somaNumerosPequenos(9, 0));


//----->Hoisting: arrow function se comprta da mesma forma<------// 