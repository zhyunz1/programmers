function solution(denum1,num1,denum2,num2){

    
    var answer1 = 0; // 분모
    var answer2 = 0; //분자 
    
    
    
    var answer3= [0,0];

    var same = num1 * num2 ; // 공통분모   
    // 분모로 나눈 수의 몫을 분모에 곱함
    
    if(same % num1 === 0 ){
        var same2 = num1 * (same/num1); //분모

        var same3 = denum1 * (same/num1); //분자 
        // answer3[0] = same2 ;
        // answer1 = same2;
        
    }

    if(same % num2 ===0){
        
        var same5 = denum2* same/num2; // 분자 
        answer2 = same5+same3;
        // answer3[1] = same5+same3;  //분자 
    }


    
    

    for(var i = same2; i>= 1 ; i--){
        if(same2 %i  === 0 &&){
            
            
            
            

            
            
            
        }
    

   

    }
    return answer3;

}  

function solution2(denum1,num1,denum2,num2){

//1.공통분모 
//2. 공통분모를 분모로 나누어 떨어진 몫으로 곱함 
    let answer = [];
    

    let common = num1* num2 ;
    
    let Denum1= (common/num1)* denum1 ; //분자 1 
    let Denum2 = (common/num2)*denum2 ; // 분자 2 

    let sumDe = Denum1 + Denum2 ;

   
   
        if(Denum1%num1===1 || Denum2%num1===1 || Denum1%num2===1 || Denum2%num2===1){
            answer[0] = Denum1+Denum2;
            answer[1] =common;

        }
        else if( num1> num2 ){
            answer[0]= Denum1 / num2  +Denum2/num2 ; 
            answer[1]= common/num2

            if(answer[0] % num2 ===0 && answer[1]%num2=== 0){
                answer[0] = answer[0] / num2 ; 
                answer[1] = answer[1] / num2;
            }
        }
        else{
            answer[0]= Denum1 / num1  +Denum2/num1 ; 
            answer[1]= common/num1


            if(answer[0] % num1 ===0 && answer[1]%num1=== 0){
                answer[0] = answer[0] / num1 ; 
                answer[1] = answer[1] / num1;
            }



        }
            

    return answer ;

} ; 




function solution3(denum1,num1,denum2,num2){

    const  num = num1* num2 ;
    const denum = denum1* num2 + denum2* num1 ;

    let minnumber ; 

    let answer=[] ;

    if( denum < num){

        minnumber = denum ;
        
    }
    else{
        minnumber = num;
    }
    console.log(minnumber);

    if(denum%minnumber ===0 &&num%minnumber===0){
        answer[0] = denum/minnumber ;
        answer[1] = num/ minnumber ; 
       
        
    }

    minnumber -=1 ;

    if(denum%minnumber ===0 && num%minnumber===0){
        answer[0] = denum/minnumber ;
        answer[1] = num/ minnumber ; 
       
        
    }

    
        
    return answer ; 

 }

    


console.log(solution3(1,2,3,4));
