// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
// 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
//     민규는 몇 번의 악수를 하고 집으로 돌아갔을까요 ?
//         그리고 민규를 포함한 행사 참가자는 몇 명일까요 ?

//             - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

// 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.


// **입력**
// 59

// **출력**
// [4, 12] // [악수 횟수, 행사 참가자 수]



// ? 풀이 

// 입력 -> 59(총 악수 횟수);
// 출력 -> [4, 12] (민규의 악수횟수, 행사참가자수)
// 사람이 2명이면 1->2 총 1번
// 사람이 3명이면 1->2, 1->3, 2->3 총 3번 
// 사람이 4명이면 1->2, 1->3, 1->4, 2->3, 2->4, 3->4 총 6번
// 사람이 5명이면 1->2, 1->3, 1->4, 1->5 , 2->3, 2->4 , 2->5, 3->4, 3->5 , 4-> 5 총 10번
// 사람이 6명이면 1~ 1->6, 2~ 2->6, 3~ 3-> 6, 4~ 4 -> 6. 5->6 총 15번 

// 규칙 사람이 1명이 늘어나면 총 악수 => 
let n = 11

for (let i = 1; i <= n; i++) {
    var total = parseInt(i * (i - 1) / 2, 10)

}
console.log(total)
console.log('=============')
// 계산식은 완성 -> 이 것은 사람 명수가 아닌 악수 횟수를 구하는 것

// let handShake = 59;

// let minKyu = 0;
// let people = 0;
// let count = 0;

// 민규의 악수 횟수는 어떻게 구할 것인가?
// -> 입출력 예시로 보면,  59 - ? = 4, ? = 55
// -> 11명일 때 총 악수 횟수는 55번이 나온다. 
// -> 그렇다면 행사 참가자 수는 민규를 더한 11명 = 12명 
// -> 민규의 악수횟수는  총 악수 횟수 - 민규를 제외한 참가자 악수 횟수 = 민규의 악수 횟수 
// -> 출력 [handShake - total, n+1]


let totalHandShake = 6; // 총 악수 
let minKyu = 1; // 민규
let part = 0; // 참가자
let non = 0; // 민규를 제외한 악수

function shakeEvnet(n) {
    for (var i = 1; i <= n; i++) {
        //part = parseInt(i * (i - 1) / 2, 10) // 55
        non = parseInt((i * (i - 1) / 2), 10);
    }
    //console.log(n - non, i + minKyu)
    console.log(n - non) // 1653..
}
// 문제점 1. n값이 증가하면 i와 part도 같이 증가한다. 
// -> 민규를 제외한 참가자 변수를 만들자
// 문제점 2. 변수 minKyu의 활용이 없다.

// 문제점 3. 입력 값을 혼동하고 있음
// !입력값은 행사에서 진행된 총 악수이다.
//-> 총 악수를 -> 참가자로 만들어야한다.  10이면 -> 5,  6이면 -> 4 


shakeEvnet(totalHandShake)




// ! 해답 
// 시간경과로 인해 풀지 못했다.
// 행사에서 진행된 악수가 총 n번인데
// 총악수라는 건 뭔지 헷갈린다.
// 총악수가 아닌 민규의 악수 횟수를 제외한 악수여야 하지 않나?

// 더 살펴 보면 행사에서 진행된 악수의 수 가 총 악수 보다 크면 사람1씩 증가
// 그만큼 카운트 되면 사람이 민규를 포함한 행사 참가자수이다 


function solution(n) {
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;
    while (true) {
        총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
        if (n < 총악수) {
            break;
        }
        temp = 총악수;
        사람 += 1;
    }
    return [parseInt(n - temp, 10), 사람];
}

const 악수의수 = 59;
console.log(solution(악수의수));