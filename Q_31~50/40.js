// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다.
//모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// ** 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

//     첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.몸무게는 무작위로 주어집니다.


// **입력**
// 50
// 5
// 20
// 20
// 20
// 20
// 20

// **출력**
// 2



// 풀이

// 1번째 입력: 제한 무게,  2번째 입력: 친구들의 수 , 탑승할 친구들의 몸무게 (무작위) 친구의 무게는 동일한 것으로 

// let weightLimit = 50
// let friends = 5;

let weightLimit = parseInt(prompt('제한할 무게를 설정해주세요'), 10)
let friends = parseInt(prompt('탑승할 친구들의 수를 설정해주세요'), 10)


let totalWeight = 0;
let count = 0;
let friendsWeight = Math.round((Math.random() * weightLimit) + 1)  // 랜덤 숫자 * 제한 무게
console.log("각 친구무게", friendsWeight)





// 인원수에는 제한이 없다. 몸무게에는 제한이 있다.
function allowWeight(weightLimit, friends, friendsWeight) {
    for (let i = 1; i <= friends; i++) {
        totalWeight = totalWeight + friendsWeight
        console.log(`${i}회차 토탈무게`, totalWeight)

        // 친구들 총 무게가 제한 무게 보다 적다면 (여기서 문제조건 중  '제한이 없지만 제한 무게를 넘으면'을 '제한무게 이상'이라고 하면 )
        if (totalWeight <= weightLimit) {
            // 조건을 통과한 회차(i)의 친구들 만 탑승
            count = i
            //console.log("토탈 인원", count, "여유 무게", (weightLimit - totalWeight))

        }
    }
    return count;
}

allowWeight(weightLimit, friends, friendsWeight)







// 해설  : 거의 비슷하게 풀었다.!

let total = 0;
let count = 0;
const limit = prompt('제한 무게를 입력하세요.');
const n = prompt('인원수를 입력하세요.');

for (let i = 1; i <= n; i++) {
    total += parseInt(prompt('무게를 입력해주세요.'), 10);
    if (total <= limit) {
        count = i;
    }
}

console.log(count);