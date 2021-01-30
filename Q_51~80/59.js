// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.


// **입력**
// hi

// **출력**
// ========================hi========================
console.log('========================hi========================')


// 풀이 

// 새 배열의 길이
let arrNew = new Array(50);
//console.log(arrNew.length)

let inStr = 'hi';
let outStr = "=";


for (let i = 1; i < arrNew.length; i++) {
    arrNew[i] = outStr;

    // i가 배열의 길이 절반이면 
    if (i === (arrNew.length / 2)) {
        // 'hi'를 넣는다.
        arrNew[i] = inStr;
    }

}

let result = arrNew.join('');
console.log(result)




// 해답 

// 유용한 메소드를 알면 간결하게 풀 수 있다. 
// 위에 푼 것과 비교해도 시간복잡도 또한 더 짧다.


const str = prompt('문자열을 입력해주세요.');

const n = 25 + parseInt((str.length / 2), 10);

//왼쪽부터 채우기
const a = str.padStart(n, '=');

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, '='));

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
