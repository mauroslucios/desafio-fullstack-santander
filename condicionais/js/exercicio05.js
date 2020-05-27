/**
 * 
 * @param {*} numero 
 */
function sinal(numero){
    if(numero >= 1){
        return 1;
    }if(numero == 0){
        return 0;
    }else{
        return -1;
    }
}
console.log(sinal(-1));