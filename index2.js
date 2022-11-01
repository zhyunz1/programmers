
//프로그래머스 레벨 0   최빈값 구하기 
function solution(array) {
    let beforenum = -1 ; // 시작숫자 
    let cnt = 0 ; // 같은 숫자 카운트   
    let cnt2 = 0 ;  // 최빈값 저장. 
    let mode = -1;  //최빈값인 수 
    let flag =false; // 최빈값이 똑같을 때 
    
    for(i =0 ; i< array.length;i++){
        if(beforenum!==array[i]){
            cnt =1 ; 
        }
        else{
            cnt +=1 ;
    
        }
        if(cnt ===cnt2){
            if(mode!==array[i]){
                flag =true ;
            }
        }
        if(cnt> cnt2){
            mode = array[i];
            cnt2 = cnt ;
            flag =false;

        }
        beforenum = array[i];
          
    }
    if(flag) return -1;  // 최빈값이 같다면 -1 리턴
    return mode;
    
    

    
}
let num = [1,2,3,3,3,3,4] ;
console.log(solution(num));