/**
 * @param {*} numero1 
 * @param {*} numero2 
 */
function triplo(numero1,numero2){
    return numero1 + numero2;
}

function triploDaSoma(numero1,numero2){
    var resultadodaSoma = triplo( numero1, numero2);
    return  resultadodaSoma * 3;
}

console.log(triploDaSoma(5,5));