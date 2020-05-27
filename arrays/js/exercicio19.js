/**
 * @param {*} umPeriodo
 * @returns
 */
function quantidadeDeMesesComPerda(umPeriodo){
    var quantidade = 0;
    for(let mes=0;mes < umPeriodo.length; mes ++){
        if(umPeriodo[mes] < 0)
        quantidade += 1;
    }
    return quantidade;
}

console.log(quantidadeDeMesesComPerda([-10,100,100,-50]));