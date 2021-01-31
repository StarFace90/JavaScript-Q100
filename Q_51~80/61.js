// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// **입력**
// aaabbbbcdddd

// **출력**
// a3b4c1d4


// 풀이 

let inStr = 'aaabbbbcdddd'.split('');
//console.log(inStr)
let count = 0;
let sr = [];

for (let i = 0; i < inStr.length; i++) {
    if (inStr[i]) {
        sr.push(inStr[i])
        count = count + 1
    }
    if (inStr[i] !== inStr[i + 1]) {

        sr.push(count);
        // 카운트가 들어가면 다시 0으로 초기화
        count = 0
    }

}
console.log(sr.join('')) // aaa3bbbb4c1dddd4




//! 해답 
// 문자를 압축하는 방법이 시간안에 생각나지 않았다.
// 아래의 방법은 필히 익힐 필요가 있을 것 같다.

const user_s = new String(prompt('문자열을 입력하세요'));
let result_s = '';
let store_s = user_s[0]; // 첫번째 인덱스 값을 설정했다.
let count = 0;

for (let i of user_s) {
    console.log(i) // a~d
    console.log(store_s)
    if (i === store_s) {  // i와 인덱스 0의 값이 같으면 카운트 1증가
        count += 1;
        // 같지 않으면 빈 문자열에 첫번째 인덱스 값과 카운트를 넣는다.
    } else {
        result_s += store_s + String(count);
        store_s = i; // store_s를 다음 i값으로 초기화
        count = 1; // 카운트는 1로 초기화
    }
}

result_s += store_s + String(count);
console.log(result_s);