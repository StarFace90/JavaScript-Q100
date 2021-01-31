// `20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

// 1. 코드 내에 숫자가 없어야 합니다.
//     - 예) console.log(20190923)이라고 하시면 안됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다.
// 5. input을 이용해서는 안됩니다.


//? 풀이 
// 직전문제가 힌트가 된다.

//let str = 'aa,cddddddddd,fffffffffgghhh'.replaceAll(',', '0')
let str = 'aa,cddddddddd,fffffffffgghhh';
console.log(str)
let newStr = new String(str)
console.log(newStr)

let settin = newStr[0];
let count = 0;
let result = '';

for (let key of newStr) {
    // 값과 첫번째 인덱스 값이 같으면

    if (key === settin) {
        console.log(settin)
        count = count + 1
    } else {
        result += String(count);
        //result = result + settin + count
        settin = key
        count = 1
    } if (key === `,`) {
        console.log(result)
        result += String(0);
    }
}
result += String(count);
console.log(result)
//console.log(result)


// !해답 
// 20190923을 문자열로 시작해서 접근은 좋은것 같은데
// 숫자를 사용하는 듯 조건도 틀려버렸고, 해답은 정규식으로 풀었다..
// 정규식을 사용해본적이 없어서..

//abcdefgh
//20190923
const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';

console.log(`
${user_s.match(/a/g).length}
${Number(user_s.match(/b/g))}
${user_s.match(/c/g).length}
${user_s.match(/d/g).length}
${Number(user_s.match(/e/g))}
${user_s.match(/f/g).length}
${user_s.match(/g/g).length}
${user_s.match(/h/g).length}`);