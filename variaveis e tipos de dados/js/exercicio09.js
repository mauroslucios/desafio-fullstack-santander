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