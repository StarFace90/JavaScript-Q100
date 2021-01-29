// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.


// **데이터**
// nationWidth = {
//      'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }


// England 22023
// ```


//?풀이


nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

console.log(nationWidth['korea']) //220827 과 가장 비슷한 국가 england(242900)과 그 차이(22023)
// 면적 수치와 비교하는 것이니 sort로 풀어보자


let arr = [];
let brr = [];
let num = 0;


for (var key in nationWidth) {
    // if (nationWidth[key] === nationWidth['korea']) {
    //     console.log('똑같다')
    // }
    arr.push(nationWidth[key]);
    arr.sort((a, b) => a - b);
    brr.push(key)
    //console.log(key)
}

for (let item in arr) {
    // 한국의 면적과 같으면

    if (arr[item] === nationWidth['korea']) {
        if (arr[0]) {
            // -가 나올 수 있으므로 절대값 사용
            num = Math.abs(arr[0] - arr[1]);
            console.log("면적의 차이는", num);

        } if (arr[1] === nationWidth[key]) {
            console.log("가장 가까운 국가는", key)
        }
    }
}





//! 해답 
// 해답을 보니 엄청 잘 못 풀었다. for문과 if문으로 도배를...
// 게다가 주어진 input들이 있어서 망정이지, input이 랜덤이면...망한 풀이이다.ㅠㅠ
// 
// entries, apply라는 사용하지 않았던 키워드를 공부해야한다.(알고는 있지만 -> 사용법을 )


const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
};

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry) {
    if (gap > Math.abs(entry[i][1] - w)) {
        gap = Math.abs(entry[i][1] - w);
        item = entry[i];
    }
}

console.log(item[0], item[1] - w);