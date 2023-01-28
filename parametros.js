//Parâmetros de função 


function soma(num1, num2) {
    return num1 + num2;
}


function multiplica(num1 = true, num2 = true) {
    return num1 * num2;
}


console.log(multiplica(soma(4, 5)));


///////////////


//parâmetro vs argumentos

//ordem dos parâmetros 


function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade("Thiago", 22));



//Boa prática é passar poucos argumentos para função 
