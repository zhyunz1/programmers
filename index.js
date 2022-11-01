// 최빈값 구하기 레벨 0 
//1.앞에서부터 차례대로 원소를 확인하며 개숫를 센다 
//2. 최반값을 그때그때 기록 

function solution(array){
    let beforenumber = -1;
    let choi = -1; //최빈값이 뭔지  
    let repeatcnt = 0 ; // 현재 똑같은 숫자가 반복된값 숫자 
    let choirepeatcnt = 0 ;// 최빈값이 딜 때 몇번 반복해서 된건지 
    let isDupchoi =false;
   
    for(i = 0;i<array.length;i++){ 
       
        if(beforenumber!==array[i]){
            repeatcnt =1; 
            // beforenumber = array[i];    
        } 
        else{
            repeatcnt +=1;
        
        }
        if(repeatcnt===choirepeatcnt){
            if(choi !== array[i]){
                isDupchoi = true;
            }
        }
        if(repeatcnt > choirepeatcnt){
            choi = array[i];
            choirepeatcnt = repeatcnt;
            isDupchoi = false;
            console.log(choi);
            
        }
        
        
        beforenumber = array[i];
        console.log(beforenumber);
        
             // console.log(cnt1);

    }
    if(isDupchoi) return -1;
    return choi;
    
}
let num =[1,2,3,3,3,4]; 
// let num =  [1,1,2,2] ; 
console.log(solution(num));


function solution2(num){
    let beforenumber = -1 ;
    let repeatcnt = 0 ;
    let cnt = 0 ; 
    let choi = 0


    for(i = 0;i< num.length;i++){
        if(beforenumber !== arry[i]){
            cnt = 1 ;
        }
        else{
            cnt +=1 ; 
        }
        if(cnt >repeatcnt){
            choi = array [i];
            repeatcnt =cnt ;
        }
        beforenumber = array[i];

    }
    
}



function solution3(num){
    let choicnt = 0 ;
    let cnt = 0;
    for(i =0; i<num.length-1;i++){
        for(j=1; j<num.length;j++){
            if(num[i]===num[j]){
                choicnt +=1 ;
                console.log(choicnt);
            }
            else if(num[cnt]!==num[j]){
                num[j] = num [cnt];

                if (num[j]===num[i]){
                    cnt += 1 ;
                    console.log(cnt);
                }
            }
        }
    }

    return choicnt ;
}


function solution4(num){
    let beforenumber = -1  ;  // 이전숫자  
    let cnt  = 0 ; //반복횟수  
    let cnt2 = 0;  // 최반값이 바뀐걸 알려주는 ,촤근값 기록해놓음 
    let real = 0 ; // 최반값 

    for(i =0;i< num.length;i++){
        if( beforenumber !== num[i]){
            cnt =1  ;
        }
        else{
            cnt +=1 ;  
            
        }
        if (cnt > cnt2){
            real = num[i];
            cnt2 = cnt ; 
        }



        beforenumber = num[i] ;
        
    }
    return real ; 

}
// let num = [1,2,2,2,3,3,3,3,4] ; 
// console.log(solution4(num));
