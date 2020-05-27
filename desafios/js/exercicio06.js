function alturaArvoreUtopica(ciclos){
    var arvore = 1;
    for(var i = 0;i < ciclos; i++){
        if(i & 1){
            arvore += 1;
        }else{
            arvore *= 2;
        }
        return arvore;
    }
}
console.log(alturaArvoreUtopica(1));