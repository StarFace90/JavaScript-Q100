// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

// 입력
// pineapple is yummy
// apple

// 출력
// 4



// 풀이 

var input1 = prompt('문자를 입력해주세요') //    문자열
var input2 = prompt('찾을 단어를 입력해주세요')  //  찾을 문자 

// 출력은 찾을 문자가 시작하는 index
// input2의 input2[0]과  문자열에서의 숨은 문자가 같아야 한다. 

// if(input1[i] === input2[0]) console.log(input1의 index출력)
// 생각할 조건: 찾을 문자가 아니더라도 문자열과 같은 알파벳이 나올 수 있다.

// 그러므로 input[i]와 input2의 마지막 인덱스 값도 같아야한다. 


// console.log(input1);
// console.log(input2);


// for (let i = 0; i < input1.length; i++) {
//     if (input1[i] === input2[0]) console.log(input1.indexOf(input1[i]))
// }
//이럴 경우, 찾을 문자가 아니더라도 문자열과 같은 알파벳이 나올 수 있다.

// indexOf 가 문자도 되는 것을 찾아냄 현타옴..

function found(input1) {
    console.log(input1.indexOf(input2))
}

found(input1)



//해답 
// 해답과 방향은 맞으나, 메서드 없이도 로직을 짤 수 있도록 연습을 해야겠다.

const data = prompt('문자열을 입력하세요');
const word = prompt('찾을 단어를 입력하세요');

console.log(data.indexOf(word));
/* indexOf() 메서드는 호출한 스트링 객체나 배열에서
 * 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
*/