// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.


// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2



//? 풀이 
//? prompt에 입력되면 문자열로 입력된다. 이것을 나누어 배열로 만들어준 후 reverse를 사용한다. 

let num = prompt("숫자를 한칸씩 띄어 입력해주세요 ").split(' ');

let numRev = num.reverse().join('');   // ? join을 통해서 split 된 것을 합친다. 
console.log(numRev)

for (let i = 0; i < numRev.length; i++) {
    console.log(parseInt(numRev[i], 10))
}
// 8 7 6 5 4 숫자형으로 변환하여 출력.. but 하나씩 출력되어, 실패..s



//!해답 


var data = prompt('숫자를 입력하세요.').split(' ').reverse();
var result = '';

for (let i = 0; i < data.length; i++) {
    result += data[i];
}

console.log(result);

// 문자열로 출력되는데....? 이렇게 되면 아래와 같이 해도 결과가 나올 듯 하다.
//? 게다가 해답의 결과는 띄어쓰기가 아닌 붙어서 54321이런 식으로 출력된다. 약간 혼란스럽다

let num = prompt("숫자를 한칸씩 띄어 입력해주세요 ").split(' ');
let numRev = num.reverse().join(' '); 