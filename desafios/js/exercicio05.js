function escada(altura){
    var escada = [];
    var medida = altura;

    for(var i = 1; i <= altura; i++){
        var degraus = " ".repeat(altura - i)+ "#".repeat(i);
        escada.push(degraus);
    }
    return escada;
}

console.log(escada(5));