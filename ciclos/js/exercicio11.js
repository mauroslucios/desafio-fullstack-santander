function somatoria(n){
    var soma = 0;
    for(var i = n -1 ;i >= 0;i--){
        soma += i;
    }
    return soma;
}
console.log(somatoria(5));