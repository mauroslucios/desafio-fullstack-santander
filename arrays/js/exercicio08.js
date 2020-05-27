 /**
  *
  *
  * @param {*} umArray
  * @param {*} outroArray
  * @returns
  */
 function mover(umArray,outroArray){
 var pegarElemento = umArray.pop();
 outroArray.push(pegarElemento);
 return [umArray,outroArray];
}

console.log(mover([1,2,3],[4,5]));