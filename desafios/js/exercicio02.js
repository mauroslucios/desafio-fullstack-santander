// function produto(multiplos){
//     var produto = 1;
//     for(const multiplo of multiplos){
//         produto *= multiplo;
//         return produto;  
//     }
// }
// console.log(produto([1, 2, 7]) );
/**
 *
 *
 * @param {*} multiplos
 * @returns
 */
function mult(multiplos) {

    let totMult = 1
   
    for (const mult of multiplos) 
    totMult *= mult
   
    return totMult
   
   }
   
   console.log(mult(1, 4, 7))