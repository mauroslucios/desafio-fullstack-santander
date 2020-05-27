/**
 * 
 * @param {*} nVoltas 
 */
function caloriasDeTrote(nVoltas){
    var voltas = 0;
    for(var i = 1;i < (nVoltas + 1);i++){
        voltas += 5 * i;
        
    }
    return voltas;
}
console.log(caloriasDeTrote(2));