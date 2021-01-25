// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다.
//호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
//그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

// **입출력**

// 입력 : 97 86 75 66 55 97 85 97 97 95
// 출력 : 6



// 풀이 

// 1-3위 까지 사탕을 준다.
// 1-3위 학생은 중복될 수 있으며 중복되는 학생까지 포함해서 사탕을 준다. 

// 높은 점수 부터 봐야하니 내림차순으로 정렬


let score = "97 86 75 66 55 55 97 85 97 97 95 94 93 97".split(' ').sort((a, b) => b - a)
//console.log(score)  // [97,97,97,97,95,86,85,75..]
let arr = []
let arr2 = []
let count = 1;




// 사탕은 1 - 3위까지 
// winner < 4 (winner가 배열이면, winner.length < 4)
// 그러 높은 점수 순이 었으면 (score[0], score[1], score[2]) -> 중복될 수 있음 

// 빈 배열에 요소가 하나씩 추가 될 때마다 카운트를 올리거나, 
// 완성된 배열의 길이를 출력 해서 결과 도출하는 방법으로 

for (let i = 0; i < score.length; i++) {
    if (score[i] === score[i + 1]) {
        arr.push(score[i])
        count = count + 1
        console.log(count)
    } else {
        arr2.push(score[i])
        console.log(arr2)
    }
}


// 시간이 걸리더라도 keep해서 다시 풀 예정 
// 잘 안쓰던 방법에서 해답이 있을 듯