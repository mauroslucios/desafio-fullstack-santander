function produto(multiplos){
    var produto = 1;
    for(var i = 1; i <= multiplos.length; i++){
        produto *= multiplos[i];
        return produto;  
    }
}
console.log(produto([1, 2, 7]) );