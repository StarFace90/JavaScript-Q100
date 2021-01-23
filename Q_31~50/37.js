// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
// 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
// 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.




//? 풀이 


let candidate = '원범 원범 혜원 혜원 혜원 혜원 유진 유진 원범 원범 혜원 혜원 혜원 혜원 유진 유진';
let count = 0;

//문자열을 나눈 후 / 반복문을 통해 각 후보의 이름이 나오면 +1씩 증가시키는 방법(+1이 1표)

let candiSplit = candidate.split(' ')
//console.log("정렬", candiSplit.sort())

// 배열 인덱스 값을 비교해서 같으면 + 1 -> 반복문 조건문으로 여러번 실패 후 빈 객체에 키 값을 넣기로 함

function candNum(candiSplit) {
    let obj = {};
    for (i = 0; i < candiSplit.length; i++) {
        //  객체 obj에 candiSplit[i] 값이 있으면 누적이므로 +1
        if (obj[candiSplit[i]]) {
            obj[candiSplit[i]] = obj[candiSplit[i]] + 1
            // 객체 obj에 값이 없으면 1 (초기값 설정)
        } else {
            obj[candiSplit[i]] = 1
        }
    }
    console.log(obj)  //{ '원범': 4, '혜원': 8, '유진': 4 }
    return addObj(obj);
}


// 여기서 반복문은 또 돌린게 패인..
function addObj(obj) {
    for (let key in obj) {
        // key : "원범"
        // obj[key] : 2
        //var name = Object.keys(obj);
        //key = obj[key]
        //obj[key] = key;
        var objNew = {}
        if (objNew[obj[key]]) {
            objNew[obj[key]] = objNew[key]
        } else {
            objNew[obj[key]] = key
        }

        console.log(objNew)
        // { '4': '원범' }
        // { '8': '혜원' }
        // { '4': '유진' }

    }
    // return vote(name, score)
}

// function vote(name, score) {
//     var voteArr = [];
//     voteArr.push(score);
//     voteArr.sort((a, b) => b - a);
//     console.log(voteArr)
// }


candNum(candiSplit)


// 문제를 잘 보면 출력이 뽑힌 학생의 이름과 받은 수를 출력해야한다.
// ! 시간이 너무 오래 걸려서 실패 







//! 해답 
// const array = prompt('이름을 입력해주세요.').split(' ');
const array = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진', '원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']
let result = {};
let winner = "";



for (let index in array) {
    let val = array[index];
    result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
    console.log(result) //{ '원범': 4, '혜원': 8, '유진': 4 }
}
// 위에까지는 비슷하게 한 것 같다.

// 왜 이런식으로 문자열 키를 바로 넣어서 값 끼리 비교하는 것을 생각 못했는지 답답하다..ㅠㅠ
winner = Object.keys(result).reduce(function (a, b) {
    return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);