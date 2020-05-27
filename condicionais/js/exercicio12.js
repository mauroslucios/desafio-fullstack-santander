/**
 * 
 * @param {*} alturaPessoa 
 * @param {*} vemComCompanhia 
 * @param {*} temProblemaCardiaco 
 */
function podeSubir(alturaPessoa,vemComCompanhia,temProblemaCardiaco){
    return ((alturaPessoa >= 1.5) && (vemComCompanhia === false) && (temProblemaCardiaco === false)) 
        || ((alturaPessoa === 1.2) && (vemComCompanhia === true) && (temProblemaCardiaco === false));
}

console.log(podeSubir(1.5,false,false));