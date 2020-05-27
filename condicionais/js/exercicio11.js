/**
 * 
 * @param {*} idade 
 * @param {*} sexo 
 * @param {*} anos 
 */
function podeSeAposentar(idade, sexo,anos){
    return (idade >= 60 && sexo == "F" && anos >= 30) || (idade >= 65 && sexo == 'M' && anos >= 30);
}

console.log(podeSeAposentar(64, "F", 30));