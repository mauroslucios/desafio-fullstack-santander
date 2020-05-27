/**
 * 
 * @param {*} profissao 
 * @param {*} nacionalidade 
 * @param {*} kilometros 
 */
function filosofoHipster(profissao,nacionalidade,kilometros){
    return ((profissao == "Músico") && (nacionalidade == "Brasil") && (kilometros > 2));
}
console.log(filosofoHipster("Músico","Brasil",5))