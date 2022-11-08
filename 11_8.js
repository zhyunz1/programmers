//프로그래머스 레벌 0 문자 반복 출력하기 

function sol(String){ 
    var answer ='' ;

    for(i= 0; i<String.length; i++){
         answer += String[String.length-i-1];
    }

    return answer ;
    

    

}
let sss = "daerb" ;



//프로그래머스 레벨 0 문자 반복 출력 

function sol2(my_string, n){
    answer ='' ;

    for(let i =0; i<my_string.length;i++){
        answer += my_string[i].repeat(n);
        
    }
    return answer;
}
let st ="hello"

//프로그래머스 레벨 0 특정문자 제거 
function sol3(my_string, letter){
    let answer='';
    for(let i=0;i<my_string.length;i++){
        if(my_string[i]!==letter){
            answer+= my_string[i];


        }
    }
    return answer;

}
let s2 = "abcdef"
console.log(sol3(s2,'f'))