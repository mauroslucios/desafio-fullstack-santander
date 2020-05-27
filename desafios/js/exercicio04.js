/**
 * @param {*} numeros
 * @returns
 */
function maisMenos(numeros){
    var qtd = numeros.length;
    var positivos = 0;
    var zeros = 0;
    var negativos = 0;
    
    for(var i = 0; i < qtd; i++){
        if(numeros[i] < 0){
            negativos += 1;
        }else if(numeros[i] > 0){
            positivos += 1;
        }else{
            zeros += 1;
        }
    }
    positivos /= qtd;
    zeros /= qtd;
    negativos /= qtd;

    var final=[positivos,zeros,negativos];

    return final;
}
console.log(maisMenos([1, 2, 0, -1]));