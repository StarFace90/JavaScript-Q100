// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

// **예를들어**
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// ```jsx
// **입출력**

// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24
// ```

//let num = ['1', '8', '2', '3', '4'];
// 출력 18

var num = prompt("양의 정수를 입력해 주세요").split('');

let result = '';

for (let i = 0; i < num.length; i++) {
    let numInt = parseInt(num[i], 10)
    // 문자열에 곱하기나 앞에 +를 해주면 문자열이 숫자형으로 변경
    result = (result * 1) + numInt
}

console.log(result)




// 해답

// while문 도 적절하게 사용하는 법에 익숙해져야한다.

let n = prompt('숫자를 입력하세요.');
let sum = 0;

while (n !== 0) {
    sum += (n % 10);
    n = Math.floor(n / 10);
}

console.log(sum);