// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.


// **입력**
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// **출력**
// ["가능", "불가능", "가능", "가능", "가능"]



//? 풀이 
// 입출력 조건에 맞춰보면 
// A를 쌓고 다음 B -> D 를 쌓아야한다는것 
// A 다음 C 가 될 수 있다.

let total = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let rules = "ABD"

let arr = [];
// 조건과 비교하기 위해서 만듦
for (let i of total) {
    // 
    arr.push(i, rules);

    // arr는 이런 형태가 나오는데, 각 블럭과 규칙을 비교하는게 좋다. -> 어떻게?
    // [
    //     'ABCDEF',  'ABD',
    //     'BCAD',    'ABD',
    //     'ADEFQRX', 'ABD',
    //     'BEDFG',   'ABD',
    //     'EFGHZ',   'ABD'
    //   ]
}




//! 해답 
//! 시간내에 풀지 못함.
//! 종이에 적어가면서 보았으나, 문제 자체를 이해 못함.
//! 기존에 간단한 문제와 달리 입체적인 문제가 나오면 손도 못대는 문제 해결을 위해 노력해야함.
//! 공부 후에 다시 풀어 볼 것 


// function solution(전체블록, 규칙){
//     let answer = [];
//     for (let 부분블록 of 전체블록){
//       answer.push(블록순서체크(부분블록, 규칙));
//     }
//     return answer;
//   }

//   function 블록순서체크(부분블록, 규칙){
//     let 임시변수 = 규칙.indexOf(규칙[0]);
//     for (let 문자 of 부분블록){
//       if (규칙.includes(문자)){
//         if (임시변수 > 규칙.indexOf(문자)){
//           return '불가능';
//         }
//         임시변수 = 규칙.indexOf(문자);
//       }
//     }
//     return '가능';
//   }


//   const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
//   const 규칙 = 'ABCD';

//   console.log(solution(전체블록, 규칙));
//   //["가능", "불가능", "가능", "가능", "불가능"]