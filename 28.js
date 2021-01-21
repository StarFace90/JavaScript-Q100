// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// 입력
// Javascript

// 출력
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.


// 풀이 

// Javascript의 경우 문자열 인덱스 0 ~ 9 까지 !
// 문자열 시작 ~~ 문자열의 길이 - 1 로 치환 

// index0, index1    index1, index2 ... 이런식으로 출력 

//..


//let str = 'JavaScript';

function gram(str) {
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            console.log(str[i], str[i + 1])

            // i 가 문자열의 마지막 인덱스 일 때, 브레이크  (마지막 인덱스 값이 앞에 서지 못하도록)
        } else if (i === str.length - 1) {
            break;
        }
    }
}
var str = prompt('문자를 입력하세요');

gram(str)





// 해답 

// 해답이 좀 더 간결하다. 
const data = prompt('문자를 입력하세요.');

for (let i = 0; i < data.length - 1; i++) {
    console.log(data[i], data[i + 1]);
}