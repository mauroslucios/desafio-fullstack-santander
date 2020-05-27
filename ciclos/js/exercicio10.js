/**
 * 
 * @param {*} x 
 */
function somaDosPares(x){
    var soma = 0;
    for(var i = 1;  i <= x;  i++) {
         if (i % 2 == 0) {
            soma = soma + i;
        }
    }
    return soma;
}
console.log(somaDosPares(10));