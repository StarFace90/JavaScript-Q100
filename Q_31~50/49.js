// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다.주어진 숫자들 중 최댓값을 반환하라.


// ** 입출력 **

//     입력 : 10 9 8 7 6 5 4 3 2 1


let gerNum = '3 5 33 123 55 32 11 999 321 4532 3231';
//console.log(gerNum)

//console.log(gerNum.split(' '))

let a = gerNum.split(' ').sort((a, b) => b - a)

console.log(parseInt(a[0], 10))





// 해답 
// 인풋값이 주어지는 과정에서 map을 통해 바로 숫자형으로 만들어 반환하였다.
// 요런 걸 배워야한다. 

let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    return parseInt(n, 10);
});

numbers.sort((a, b) => {
    return b - a;
});

console.log(numbers[0]);