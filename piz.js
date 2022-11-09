function solution(n) {
    var answer = 0;
    let pizza = 6 ; 
    
    let small =0  ; 
    
    if (n < pizza){
        small = n; 
    }
    else{
        small = pizza ;
    }
    
    
    for(let i =small; i>=1 ; i--){
        if(n%i==0 && pizza%i===0){
            return ( parseInt(n/i) * parseInt(pizza/i) *i )/ pizza;

            if(n%i!==0 && pizza%i!==0){
                return pizza * n /pizza;
            }

        }
        
        
       
    }
    
    
    return answer ; 
}
function sol2(slice, n){
    if(n%slice !==0){
        return parseInt(n/slice)+1
    }
    else{
        return parseInt(n/slice);
    }
}

console.log(sol2(4,12));

console.log(parseFloat(20/100))


function sol3(price) {
    var answer = 0;

    if(price >=500000){
        return Math.floor(price-(Math.floor(price * parseFloat(2/10))));
    }
    else if(price >=100000){
        return Math.floor(price-(Math.floor(price*parseFloat(0.1/2)))) ;
    }
    else if(price>=300000){
        return  Math.floor(price-(Math.floor(price*parseFloat(1/10)))) ;
    }
    else{
        return price;
    }
    
    return answer;
}
console.log(sol3(154892))