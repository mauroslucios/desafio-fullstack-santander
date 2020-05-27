/**
 * @param {*} alunosDia
 * @param {*} qtd
 * @returns
 */
function acontece(alunosDia, qtd){
    var presentes = 0;
    for(var i=0; i < alunosDia.length; i++){
        if(alunosDia[i] <= 0) presentes ++;
        if(presentes >= qtd)
        return true;
    }
    return false;
}

function aberturas(alunosDia, qtd){
    var resultado = [];
    for(var i =0; i < alunosDia.length; i++){
        resultado.push(acontece(alunosDia[i],qtd));
    }
    return resultado;
}

console.log(aberturas())