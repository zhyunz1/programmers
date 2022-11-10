// Lv 0 9일차 개미군단
function sol(hp){
    let jangun = 5 ;
    let byungjung = 3;
    let work = 1 ;
    let answer =0;
    let namuji = 0;
    

    
    
    if(hp%jangun===0){
        return hp/jangun; 
    }
    else{
        answer = parseInt(hp/jangun)
        namuji = hp%jangun ; 
        console.log(namuji)
        

        if(namuji>=byungjung){
            answer+= parseInt(namuji/byungjung) ;
            namuji = namuji%byungjung
            if(namuji>=work){
                answer += parseInt(namuji/work)
            }
            
        }
        else{
            answer+= namuji/work;
        }
        
       
        
     

    }

    return answer;


    
}
let hp =7;


//0. 장군보다 작을 때 
// 병정으로 나눠진다면 병정으로 나누고 몫을 answer 나머지를 나머지에 
//나머지가 work로 나눠진다면 work로 나누고 몫을 answer 
// 1. 무조건 장군으로 한 번 나눠줌 
// 2. 그후 몫을 answer에 다음 
// 3. 만약 장군으로 hp를 나눴는데 나머지가 병정보다 크거나 같다면 병정으로 나눠줌 그후 몫을 담음 
//3. 그리고 만약에 나머지가 0이 아니라면 
//4. 나눠진다면 몫을 answer에 더함 
//5. 나눠어지지 않는다면 일개미로 나눠주고 몫을 answer에 



// lv 0 9일차 모스부호(1)
function sol2(letter){
    let answer=""
    let let1= letter.split(" ")
    console.log(let1)
    

    var morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }

    for(let j of let1){
        for(let i in morse){
            if(i===j){
                answer+= morse[i] //값
            }
            
        }

    }

    return answer;

    

}
//1. 프로퍼티 키 ,프로퍼티 값 
//
//2. 키가 letter와 일치한다면 answer에 프로퍼티 값을 더해준다

// 9일차 가위 바위 보 
function sol3(rsp){
    let answer = ""
    let gawi = '2' ;
    let bawi = '0';
    let bo = '5';

    for(let i of rsp){
        if(i===gawi) {
            answer+= bawi 
        }
        if(i===bawi){
            answer+=bo;
        }
        if(i===bo){
            answer+= gawi
        }
    }
    //첫번째 i가 가위라면 answer 

    return answer


}
let a = "2";


//가위를 냈을 때 이길라면 바위 
//바위를 냈을 때 이길라면 보자기 
//보를 냈을 때 이길라면 가위 
//
//

// 구슬을 나누는 경우의 수
// 범위가 30까지기 때문에 숫자가 매우 커짐 
// BigInt()  
// 
function sol4(n,m){

    
    let answer =0;
    function fact(num){
        let facto = BigInt(1) ;
        for(let i=num;i>=2;i--){
            facto*= BigInt(i)
        }

        return facto

    }
    answer = fact(n) / (fact(n-m)*fact(m))   

    return answer;

        }


//n! / (n-m)! *m!

//첫번 째 풀이 
function sol4_1(n,m){


    //팩토리얼 
    let answer =0;
    let one = BigInt(1)
    let two = BigInt(1)
    let three =BigInt(1)
    for(let i= n; i>=2;i--){
        one *= BigInt(i)
    
       
    }
    for(let j = n-m; j>=2;j--){
        two *=BigInt(j)
    }
    for(let k = m; k>=2;k--){
        three *=BigInt(k)
    }

    return one/ (two*three);
    

}
console.log(sol4_1(3,2))

