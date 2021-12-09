const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false
// 1 => true
//Os dados abaixo são considerados pelo java script como falsas conforme os resultados abaixo:
console.log(0 == false);
console.log("" == false);

// Os dados abaixo são considerados pelo java script como verdadeiro conforme os resultados abaixo:
console.log(1 == true);

// null ==> vazio ou nada
let minhaVar; // undefined
let varNull = null; // valor null

console.log(minhaVar);
console.log(varNull);
console.log(typeof minhaVar);
console.log(typeof varNull); // vai apresentar como objeto em vez de null


let numero = 3;
let texto = "Teste"
console.log(typeof numero);
console.log(typeof texto);

//
// CONVERSÃO DE TIPOS
//

//Conversão explícita
const numero = 10;
const numeroString = "10";

console.log(numero + number(numeroString));


