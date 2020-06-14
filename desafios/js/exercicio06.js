/**
 *
 *
 * @param {*} ciclos
 * @returns
 */
function alturaArvoreUtopica (ciclos) {
    var altura = 1;
    if (ciclos == 0) 
      altura = 1;
    else
      for (var i=1; i<=ciclos; i++) {
        if (i % 2 == 0)
          altura += 1;
        else
          altura = altura*2;
      }
    return altura;
  }
console.log(alturaArvoreUtopica(0));

console.log(alturaArvoreUtopica(1));

console.log(alturaArvoreUtopica(2));

console.log(alturaArvoreUtopica(3));