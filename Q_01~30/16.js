// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거


// 풀이 

var inputStr = prompt('문장을 입력하세요');

// split으로 나눈다 거/꾸/로/    -> 배열이니까 reverse로 뒤집고 나서 join으로 문자열로 합치기
var strToArr = inputStr.split('').reverse().join();
console.log(strToArr);


// 해답

const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);