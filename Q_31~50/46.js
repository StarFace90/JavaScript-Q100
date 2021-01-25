// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)



// ? 풀이 
// 10 -> 15 (10,11,12,13,14,15)
// (1+0+1+1+1+2+1+3+1+4+1+5) = 21

// 주어진 문제는 1부터 20(포함) 까지 문제 (102)

let str = '';
let arr = [];
let result = 0;

for (let i = 1; i <= 20; i++) {
    //console.log(i) // 1~20
    str = str + i
    arr = str.split('');
    //console.log(arr)
    //console.log(parseInt(arr[i], 10))
}

for (let j = 0; j < arr.length; j++) {
    result = result + parseInt(arr[j], 10);

}
console.log(result)


// 리팩토링 

let numA = prompt("첫번째 숫자를 입력하세요");
let numB = prompt("두번째 숫자를 입력하세요");

let strEmpty = '';
let arrEmpty = [];
let resultNum = 0;


function numToSplit(numA, numB) {
    for (let i = numA; i <= numB; i++) {
        strEmpty = strEmpty + i;
        arrEmpty = strEmpty.split('');
    }
    return allNumAdd(arrEmpty)
}

function allNumAdd(arrEmpty) {
    for (let j = 0; j < arrEmpty.length; j++) {
        resultNum = resultNum + parseInt(arrEmpty[j], 10)
    }
    return resultNum
}

numToSplit(numA, numB)




// 해답 

// 아래처럼 반복문을 다양하게 써야한다..

let arr = [];
let sum = 0;

for (let i = 0; i < 20; i++) {
    arr[i] = i + 1;
}

arr.forEach((n) => {
    while (n !== 0) {
        sum += (n % 10);
        n = Math.floor(n / 10);
    }
})

console.log(sum);