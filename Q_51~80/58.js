// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// **숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**

// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.


// 풀이 

// Number 메소드 중에 숫자의 언어 구분이 있는 문자열을 반환하는 toLocaleString()이 있다.

// let a = parseInt('123456789', 10)

// console.log(a.toLocaleString('ko-KR'))


let n = parseInt(prompt("숫자를 입력해주세요"), 10);

console.log(n.toLocaleString('ko-KR'))




// 해답 
// 내장함수를 사용해서 간단하게 풀 수 도 있지만, 
// 어떤 것을 요구할 지 모르므로 재귀함수나 정규식으로 푸는 연습도 필요하다.


// 내장함수 사용
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
    if (s.length <= 3) {
        return s;
    } else {
        return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
    }
}

const n = prompt('숫자를 입력해주세요.');
console.log(comma(n));