// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

// ```jsx
// **입출력**

// 입력 : 10 2
// 출력 : 5 0
// ```



// 풀이 


var n = prompt('숫자 두 개를 입력해 주세요').split(' ');

// var n = ['10', '2'];

// 출력시 2 / 10  과 2 % 10 이런 식으로 계산해서 출력해야한다. 

//1. 각각의 배열의 값을 숫자형으로 변환한다. 
console.log(parseInt(n[0], 10), parseInt(n[1], 10));


//2. 변환된 숫자를 각각의 변수에 할당한다.

let num1 = parseInt(n[0], 10);
let num2 = parseInt(n[1], 10);

//3. 수식에 맞게 변수를 대입하여 결과 도출한다. 

console.log(num1 / num2, num1 % num2);

// ! 문제에는 제시가 되지 않았지만, 소수점 자리도 염두 해둘 것 


//? 해답 

const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));  //! 나누기이므로 -> 소수점도 생각해서 floor로 정수 이하 자리 버림
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);