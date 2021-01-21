// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.



// 풀이 

// 알파벳이 대문자이면 YES

//let n = 'HELLO'


function checkAlphabet(n) {
    // 알파벳 하나 이상 입력한 경우 
    if (n.length > 1) {
        console.log('알파벳 하나만 입력해주세요');

        // 알파벳 하나만 입력했을 때
    } else if (n.length === 1) {
        if (n === n.toUpperCase()) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

var n = prompt('알파벳 하나를 입력하세요');

checkAlphabet(n);



// 해답 

// 내가 너무 어렵게 생각했나 싶다 ^^;;

const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()) {
    console.log('YES');
} else {
    console.log('NO');
}