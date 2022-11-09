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
    // for(let i=0;i<alpha.length;i++){
    //     if(age1[i]===alpha[i][1]){
    //         answer += alpha[i][0]
    //     }
        
    // }

    // return answer;

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

    let start = 0; 
    
    

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

let l = [1,2,3,4,5,6,7] ;

console.log(sol2(l));





