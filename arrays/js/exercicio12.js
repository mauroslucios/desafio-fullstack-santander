var medalha = ["ouro","prata","bronze","nada"];
function medalhaDeAcordoComPosto(numero){
    if( numero >= medalha.length + 1 ){
        return "nada";
    }else{
        return medalha[numero-1];
    }
}
console.log(medalhaDeAcordoComPosto(4));

