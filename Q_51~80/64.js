// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
//     화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

// ** 입력 **
//     정량 N이 입력됩니다.

// ** 출력 **
//         가장 적게 옮길 수 있는 횟수를 출력합니다.
// 만약 어떻게 해도 정량이 N이 되지 않는다면 - 1을 출력합니다.


//?풀이 

// 정량 N (숫자)

//let n = parseInt(prompt("정량을 입력하세요"), 10);

let n = 24;
// 카운트 
let count = 0;
let count3 = 0;

// 몫 저장용
let result = 0;

// 조건 1. 7kg로 나누어 3개 
// 가장 적게 니까 7kg에서 다 끝나면 좋을 것 정량을 7로 나눈 나머지가 0이면 다 끝난거임


for (let i = n; i >= 0; i = i - 7) {
    result = i
    count = count + 1
    var cnt7 = count - 1
}

// 조건 2. 3kg로 나누어 1개 

for (let j = result; j >= 0; j = j - 3) {
    console.log(j)
    count3 = count3 + 1
    var cnt3 = count3 - 1
}

// 조건 3. 합산

console.log(`총 횟수는 7키로 ${cnt7}회  3키로 ${cnt3}회  ${cnt7 + cnt3}회 입니다.`);




// 해답 

// 풀이하는데 너무 비효율적으로 풀었으며 정량이 안되면 -1을 출력하라는 것도 하지 못했다.
// 매일 문제를 풀지만 전에 풀던 문제도 기억이 안나서 슬프다..
// 풀던 문제를 공책이나 블로그에 기록해서 매일 보도록 해야겠다.


let N = parseInt(prompt('정량을 입력하세요'), 10);
let result = 0;

while (true) {
    if (N % 7 === 0) {
        result += parseInt(N / 7, 10);
        console.log(result);
        break;
    }
    N -= 3;
    result += 1;
    if (N < 0) {
        console.log(-1);
        break;
    }
}