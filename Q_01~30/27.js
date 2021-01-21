// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}



// 풀이

// 핵심은 문자열을 or 숫자를 객체로 만드는 것

// 객체['Yujin'] = 70 ,  객체['Heywon'] = 100 

// 객체에 키와 값을 추가 하고 싶으면 obj.key = value 또는 obj['key'] = value


var input1 = prompt('두 학생의 이름을 입력해주세요').split(' ');
var input2 = prompt('각 학생의 수학 점수를 입력해주세요').split(' ');

let obj = {}

for (key in input1) {
    obj[input1[key]] = parseInt(input2[key], 10);
}

console.log(obj)


// console.log(input1); // ['yujin', 'hyewon']
// console.log(input2); // [70, 100]



// 해답 

const keys = prompt('이름을 입력하세요').split(' ');
const values = prompt('점수를 입력하세요').split(' ');
const obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
}

console.log(obj);