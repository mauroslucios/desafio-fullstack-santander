//#############################################
/**
 *@param {*} numero
 * @returns
 */
function dobro(numero){
    return numero * 2;
}
console.log("Dobro:" + dobro(10));
//#############################################
/**
 * @param {*} numero
 * @returns
 */
function metade(numero){
    return numero / 2;
}
console.log("Metade: "+metade(100));
//#############################################
/**
 * @param {*} numero1
 * @param {*} numero2
 * @returns
 */
function multiplicar(numero1,numero2){
    return numero1 * numero2;
}
console.log("Multiplicação: "+ multiplicar(2,5));
//#############################################
/**
 * @param {*} numero1
 * @param {*} numero2
 * @returns
 */
function triplo(numero1,numero2){
    return numero1 + numero2;
}

function triploDaSoma(numero1,numero2){
    var resultadodaSoma = triplo( numero1, numero2);
    return  resultadodaSoma * 3;
}

console.log("Triplo da soma: "+ triploDaSoma(5,5));
//#############################################



//#############################################
/**
 * @param {*} raio 
 */
function perimetro(raio){
    var x = 3.14 *(raio * 2) ;
    return x;
}
console.log("perímetro: " + perimetro(3));
//###############################################
/**
 * @param {*} area 
 */
function area(raio){
    var y =  3.14 * (raio * raio);
    return y;
}
console.log("Área: " + area(3));
//###############################################
/**
 * @param {*} nome
 * @param {*} sobrenome
 * @returns
 */
function tamanhoNomeCompleto(nome,sobrenome){
    var tamanho = nome + " " + sobrenome;
    return tamanho.length;
}
console.log("Tamanho da string: " + tamanhoNomeCompleto("mauro lucio pereira da","silva"));
//###############################################
function gerarProbabilidade(){
    return Math.random() * 100;
}
console.log("Probabilidade: "+gerarProbabilidade());
//###############################################
var diaDeSemana = "domingo";

if(diaDeSemana == "domingo"){
    console.log("Hoje é dia de futebol! ! !");
}
//###############################################
function hojeSeJoga(dia){
    if(dia == "domingo"){
        return  "Hoje é dia de futebol!!!"
    }else{
        return "Hoje não é dia de futebol!!!"
    }
}
console.log(hojeSeJoga());
//################################################################
var nome ="mauro lucio pereira da";
var sobrenome ="silva";
var idade = 49;
var resultado = nome+" "+sobrenome+" "+"terá"+" "+idade+" "+"anos";
console.log(resultado);
//################################################################
function sinal(numero){
    if(numero >= 1){
        return "positivo";
    }if(numero == 0){
        return "igual a 0";
    }else{
        return "negativo";
    }
}
console.log(sinal(-1));
//###############################################
function eNumeroDaSorte(numero){
    return numero > 0 && numero % 2 == 0 && numero % 3 == 0 && numero != 15;
}
console.log(eNumeroDaSorte(18));
//#################################################
function possoIrAoBanco(diaDeSemana,horaAtual){
    return ((diaDeSemana != "sabado") && (diaDeSemana != "domingo") && (horaAtual > 9) && (horaAtual < 15));
}
console.log(possoIrAoBanco("segunda",16))
//###################################################
var umNumeroPequeno = 1;
var umNumeroGrande = 100;
var eMenor;
var eMaior;

eMenor = umNumeroPequeno < umNumeroGrande;
console.log("Verdadeiro " + eMenor);

eMaior = (!(umNumeroGrande > umNumeroPequeno));
console.log("Verdadeiro " +eMaior);
