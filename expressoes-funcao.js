// declaraçao de função 

function minhaFuncao(param) {
    //bloco de codigo
    console.log(param);
}

minhaFuncao("param1");
minhaFuncao("param2");



// expressão de Função (não é boa prática)

const soma = function(num1, num2) {return num1 + num2;}
console.log(soma(1, 1));


//diferença principal: HOISTING
// Funções e var são "listadas" no topo do arquivo

console.log(apresentar());

function apresentar() {
    return "olá";
}

// VS

//console.log(soma(4, 4));//8
//const soma = function(num1, num2){
//    return num1 + num2)}
