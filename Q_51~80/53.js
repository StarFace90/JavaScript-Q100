// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다.
// 그중 괄호의 모양이 바르게 구성된 문자열을 //!바른 문자열**, 
// 그렇지 않은 문자열을 //!바르지 않은 문자열이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

//  (()) -> true    ()()) -> false

// 풀이 

let strN = '(())'.split('');
let count = 0
//console.log(strN)

for (let i = 0; i < strN.length; i++) {
    //console.log(strN[i] === '(')  // t,t,f,f -> '(',')'가 서로 상쇄하면 true로 설정 count로 설정해서 0 이면 true, 아니면 false이도록 

    if (strN[i] === '(') {
        count++;
    } else if (strN[i] === ')') {
        count--;
    }
}
if (count === 0) {
    console.log(true)
} else {
    console.log(false)
}





//! 해답 
// ! 문제푸는데 함수로 리팩토링을 잊었다. 그리고 57 번째 줄은 무엇을 의미하는지.. 배열에 담아서 판단하는 것인가...?



function mathBrackets(e) {
    let count = 0;

    //괄호 개수가 같지 않으면 false
    for (let i = 0; i < e.length; i++) {
        if (e[i] === '(') {
            count++;
        }
        if (e[i] === ')') {
            count--;
        }
    }
    if (count !== 0) {
        return false;
    }

    let 괄호 = [];
    for (let i in e) {
        if (e[i] === '(') {
            괄호.push('(');
        }

        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }
    }
    return true;
}


const n = prompt('입력해주세요.').split('');

if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}
