// 은주는 놀이공원 아르바이트를 하고 있다.
// 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다.
// 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오


// **입력1**
// 1 2 3 4 5

// **출력1**
// YES

// **입력2**
// 1 4 2 6 3

// **출력2**
// NO


//? 풀이 
// 숫자가 연속되면 yes, 연속되지 않으면 no 
// 연속 되는 숫자라면 정렬되어 있는 배열과 비교해서 맞지 않으면 no를 출력 

// 1. 입력되는 공백 숫자 정렬 

let getN = '1 4 2 6 3';
// sort는 원 배열이 정렬되므로 n을 기반으로 first와 compare을 나눴음

let firstN = getN.split(' ');
console.log(firstN)

let compareN = getN.split(' ').sort((a, b) => a - b);
console.log(compareN)

for (let i = 0; i < compareN.length; i++) {
    // 문자열과 숫자의 비교이므로 == 를 두개 써서 엄격하지 않은 비교를 사용했다.
    // every를 사용하여 하나라도 두 배열의 요소가 다르면 false !
    let compare = (cur) => cur == compareN[i];
    var result = firstN.every(compare);
    //console.log(result)
}

console.log(result)


// 리팩토링 

let getNum = prompt('공백이 있는 숫자를 입력해주세요');
let getFirstNum = getNum.split(' ');
let compareNum = getNum.split(' ').sort((a, b) => a - b);
console.log(compareNum)




function numberCompare(compareNum, getFirstNum) {

    for (let i = 0; i < compareNum.length; i++) {
        var count = i;
        console.log("카운트의 값", i)
        compareNum[i] = parseInt(compareNum[i], 10)
        getFirstNum[i] = parseInt(getFirstNum[i], 10)

        // 두 배열의 요소가 같을 경우 카운트 증가
        if (compareNum[i] === getFirstNum[i]) {
            count = count + 1
            // 두 배열의 요소가 하나라도 다르면 
        } else {
            return console.log("NO")
        }
    }
    return choiceTandF(count)
}


// 두 배열의 요소가 같을 경우 카운트 값을 통해 참 거짓 판별
function choiceTandF(choice) {
    // 카운트의 수가 배열의 길이와 같으면
    if (choice === compareNum.length) {
        return console.log("카운트의 수와 배열과 같음 = true")
    } else {
        return console.log("카운트의 수와 배열과 다름 = false")
    }
}



numberCompare(compareNum, getFirstNum)




// !해답 
//// 나는 엄청 어렵게 접근 한 것 같다.
// !문제를 잘 못 이해했다...
// ! 문제는 연속된 숫자인지 판별하는 것인데 나는 sorting 이 맞는지 비교를 한 것이기 떄문에....

function sol(l) {
    l.sort((a, b) => {
        return a - b;
    });
    console.log(l)

    // 정렬된 배열을 돌려서 배열의 값 + 1과  배열의 i+1인덱스 값이 다르면 no 끝까지 판별되지 않으면 yes
    // // 이미 배열을 정렬시킨 걸 비교만 하기 때문에 더 간단하다.
    for (let i = 0; i < l.length - 1; i++) {
        if (l[i] + 1 !== l[i + 1]) {
            return 'NO';
        }
    }
    return 'YES';
}

const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

console.log(sol(n));