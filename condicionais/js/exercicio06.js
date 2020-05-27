/**
 * 
 * @param {*} numero 
 */
function eNumeroDaSorte(numero){
    return (numero > 0 ) && (numero % 2 === 0) || (numero % 3 === 0) && (numero !== 15);
}
console.log(eNumeroDaSorte(6));