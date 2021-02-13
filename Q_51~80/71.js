// **가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란

// A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 
// 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

// 예를 들어 
//   S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']
//   S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 

//   둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

// 이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

// - Test Case -

// 입력
// THISISSTRINGS
// THISIS

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// TATHISISKKQQAEW

// 출력
// 6

// -

// 입력
// THISISSTRINGS
// KIOTHIKESSISKKQQAEW

// 출력
// 3

// -

// 입력
// THISISSTRINGS
// TKHKIKSIS

// 출력
// 3



// ? 풀이

// a = '빡빡이 아저씨'
// b = '대머리 아저씨'  -> 아저씨 라는 공통된 문자열 3개이므로 출력은 3개 
//THISISSTRINGS
// TATHISISKKQQAEW
// 6개 : THISIS

// 문자열을 잘게 나눠 배열에 넣는다.


// 비교를 하려면??
// for문으로 반복 비교..
// 문제 a[i] -> b[j]를 모두 비교 -> 겹치는거 많아짐..
// 가장 좋은 방법은 한단어 아닌 여러 단어 비교해서 맞는 거 출력하는 것이라 생각

// '빡빡이 아저씨' -> '빡빡', '빡빡이', '빡이아', '이아저', '아저씨', '빡빡이아', '빡빡이아저' .. 등등 
// TAT/TATHI/THIS/THISI.. 등등 이걸 여러개 만들어내서 비교하는게 더 나을듯..싶다..


// 그렇게 하려면?? 각 단어를 각각 나눠야한다.
// 나눌라면 slice? (배열)
// 이걸 어떻게 해야 들여쓰기처럼 밀리면서 자를것인가..?? -> 반복문


// 두 문자열의 한번의 비교가 어려워 
// 파라미터로 두번 돌릴 것 
function compareString(value) {
    // 두 파라미터의 결과가 같아지는 것을 막기 위해 함수 스코프 안에 빈 배열 설정
    let arr = [];
    for (let i = 0; i < value.length; i++) {
        for (let j = 1; j < value.length; j++) {
            // 새로운 배열에 넣는다. 
            //arr.push(a.slice(0, key)) -> (보기도 불편..이어지지도 않는다.)
            //[[],[ '빡' ],[ '빡', '빡' ],[ '빡', '빡', '이' ],[ '빡', '빡', '이', '아' ],
            //[ '빡', '빡', '이', '아', '저' ]]

            // 입력 값에 split을 제외하고 문자열로 했더니 
            // [ '', '빡', '빡빡', '빡빡이', '빡빡이아', '빡빡이아저' ] 완벽하지는 않지만 원하는 값이 나온다.

            // arr.push(a.slice(key, a.length));
            // 시작인덱스 값으로 반복될 키와 끝 인덱스로 a의 길이를 주었더니 
            //[ '빡빡이아저씨', '빡이아저씨', '이아저씨', '아저씨', '저씨', '씨' ] 로 나온다. (더 안정적인 값)
            // 6-5-4-3-2-1의 문자 길이 
            // but 6-5-4-3-2-1이 여러 경우의 수가 나와야하는데 그렇지 못함.

            // for in문을 이중 for문으로 변경 
            // 일반적인 for문은 같은 문자가 반복해서 출력됨 (반복되는 문자가 있으면 안된다.)

            arr.push(value.slice(i, j - value.length));
            // 'TH',           'THI',        'THIS',        'THISI',      'THISIS',
            // 'THISISS',      'THISISST',   'THISISSTR',   'THISISSTRI', 'THISISSTRIN',
            //빈 문자열이 나오지만 얼추 원하는 대로 나온다.
        }

    }
    return arr;
}

let a = 'THISISSTRINGS';
let b = 'TATHISISKKQQAEW';

let first = compareString(a);
let second = compareString(b);



// 테스트를 통과하는 요소를 모아 새로운 배열로 반환 
// 빈 문자열 없앤다.
// 두번재 배열에서 x와 같은 문자열들만 새 배열로 출력 
let newArr = first.filter(x => second.includes(x));
let deleteBlank = newArr.filter(x => x.length > 0);
console.log(deleteBlank);
deleteBlank.sort().reverse();

let result = deleteBlank[0].length;

console.log(`결과는 문자:${deleteBlank[0]}, 길이:${result}입니다.`)




// 해답 

// 제한 시간을 두지 않고 풀으니 풀긴 풀었다만
// 해답에 비해 너무 길고 오래걸렸다.. 문제다..
// 그래도 메소드나 비슷하게 풀은 것 같아서 그것은 긍정적..
// sort를 하면서 length로 길이 순서대로 변경하는 것을 생각안하다니...

// 더군다나 for문  result.push(string.slice(j, j + string.length - i + 1));
// 이렇게는 절대 생각 못할 것 같다.
// for문이 이중 삼중으로 되면 너무 어렵다... 
// 그림을 그려도 어렵다...

function sol(string) {
    let result = [];
    for (let i = 1; i < string.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            result.push(string.slice(j, j + string.length - i + 1));
        }
    }
    return result;
}

const inputOne = prompt('첫번째 문자열을 입력해주세요.');
const inputTwo = prompt('두번째 문자열을 입력해주세요.');
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a, b) => {
    return b.length - a.length;
});

console.log(intersection[0].length);