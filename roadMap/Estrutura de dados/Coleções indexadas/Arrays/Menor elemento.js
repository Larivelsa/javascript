function menorElemento(arr){
    if (arr <= 0){
        return 'Array vazio!';
    }else{
        menor = arr[0];
        for (elemento of arr){
            if (elemento < menor){
                menor = elemento;
            }
        }
        return menor;
    }
}

console.log(menorElemento([1,7,-9,-88]))