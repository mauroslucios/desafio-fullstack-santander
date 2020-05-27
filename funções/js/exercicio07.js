/**
 * @param {*} nome 
 * @param {*} sobrenome 
 */
function tamanhoNomeCompleto(nome,sobrenome){
    var tamanho = nome + " " + sobrenome;
    return tamanho.length;
}

console.log(tamanhoNomeCompleto("mauro lucio pereira da","silva"));