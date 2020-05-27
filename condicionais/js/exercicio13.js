/**
 * 
 * @param {*} posto 
 */
function medalhaSegundoOPosto(posto){

    if(posto == 1){
        return "Ouro";
    }else if(posto == 2){
        return "Prata";
    }else if(posto == 3){
        return "Bronze";
    }else{
        return "Continue participando"
    }
}
console.log(medalhaSegundoOPosto(4))