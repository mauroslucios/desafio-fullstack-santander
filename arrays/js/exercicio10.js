/**
 * @param {*} array
 * @param {*} numero
 * @returns
 */
function contem(array,numero){
    for(var i =0; i < array.length; i++){
        if(array.indexOf(numero) != -1)
        return true;
    }
    return false;
}
console.log(contem([1, 6, 7, 6], 7));