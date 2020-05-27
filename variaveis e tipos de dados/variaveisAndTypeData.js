/**
 * declaração de variáveis e atribuição de valores
 */
let Nasc = 1969 ;
let mes = "novembro";
console.log("Ano:" + " "+Nasc + ", " +"Mês: " + mes);
//##############################################
/**
 * outro tipo de dados
 */
var saudacao = "Hello World";
console.log(saudacao);
//#############################################
/**
 * variáveis e operações
 */
let numberA = 10;
let numberB = 2;

let resultadoSoma  = numberA + numberB;
let resultadoSubtracao = numberA - numberB;
let resultadoMultiplicacao = numberA * numberB;
let resultadoDivisao = numberA / numberB;
//##############################################
/**
 * mais operações
 */
let firstName =  "Mauro Lucio Pereira da";
let lastName = "Silva";
let nomeCompleto = firstName + " " +lastName;
//##############################################
/**
 * outras operações
 */
var nome = "Mauro Lucio Pereira da";
var sobrenome = "Silva";
var idade = 50;

var resultado = nome +" "+sobrenome+" "+"terá"+" "+idade+" "+"anos";
 
console.log(resultado);
//############################################
/**
 * trocar valores
 */
var numeroA = 30;
console.log(numeroA);
var numeroB = 45;
console.log(numeroB);

var numeroC = numeroA;

numeroA = numeroB;
numeroB = numeroC;

console.log(numeroA);
console.log(numeroB);
//#############################################
/**
 * mais tipos de dados
 */
var gostoDeSorvete = true;
console.log(gostoDeSorvete);
//#############################################
/**
 * mais sobre os booleanos
 */
var umNumeroPequeno = 1;
var umNumeroGrande = 100;
var eMenor;
var eMaior;

eMenor = umNumeroPequeno < umNumeroGrande;
console.log("Verdadeiro " + eMenor);

eMaior = (!(umNumeroGrande > umNumeroPequeno));
console.log("Verdadeiro " +eMaior);