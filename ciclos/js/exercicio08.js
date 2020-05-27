/**
 * 
 * @param {*} quantidadeDeMoedas 
 */
function somarMoedasDe25(quantidadeDeMoedas){
    var totalMoedas = 0;
    for(var i= 0; i < quantidadeDeMoedas;i++){
        totalMoedas = quantidadeDeMoedas * 0.25;
     }
    return totalMoedas;
}
console.log(somarMoedasDe25(10))
