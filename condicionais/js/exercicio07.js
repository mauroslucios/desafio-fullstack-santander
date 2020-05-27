/**
 * 
 * @param {*} diaDeSemana 
 * @param {*} horaAtual 
 */
function possoIrAoBanco(diaDeSemana,horaAtual){
    return ((diaDeSemana != "Sábado") && (diaDeSemana != "Domingo") && (horaAtual > 9) && (horaAtual < 15));
}
console.log(possoIrAoBanco("Sábado",11))