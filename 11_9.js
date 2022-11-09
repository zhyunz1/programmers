//프로그래머스 Lv0 외계행성의 나이 
function sol(age){

    var answer ='' ;
    
    let alpha =[
        ['a','0'],
        ['b','1'],
        ['c','2'],
        ['d','3'],
        ['e','4'],
        ['f','5'],
        ['g','6'],
        ['h','7'],
        ['i','8'],
        ['j','9']

    ];
    

    let age1 = age.toString() 
    

    for(let i=0;i<age1.length;i++){
        for(let j=0; j<alpha.length;j++){
            if(age1[i]===alpha[j][1]){
                answer += alpha[j][0];
            }
        }
    }
    return answer;
    

    

}


//Lv 0 진료 순서 정하기 

function sol2(emergency){
    //원소길이 10까지 
    // 원소 100까지 
    let answer=[];

    
    
    

    let N = [...emergency].sort((a,b)=>b-a) ;
    
    



    for(let i=0;i<emergency.length;i++){
        for(let j=0;j<N.length;j++){
            if(emergency[i]===N[j]){
                
                answer.push(j+1);
            }
        }
        
    }
    return answer;
    
}

// Lv 0 순서쌍의 개수 
function sol3(n){
    let cnt=1 ; 

    for(let i=1;i<n;i++){
        if(n%i===0){
            cnt+=1
        }

    }
    return cnt;
}
console.log(sol3(100));





