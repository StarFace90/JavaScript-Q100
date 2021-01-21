// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요. (제곱)


// 풀이


//1. 공백으로 구분하여 두 숫자 a b 주어지기 

var getNum = prompt('숫자 두개를 입력해 주세요').split(' '); // 문자열이므로 문자열을 split으로 나누어 배열로 변환
// ['2','4']
// let getNum = '2 4'.split(' ');

// 2. 배열을 풀고 숫자형으로 변환하기 
// var arrToNum = getNum.join();
// console.log(typeof(arrToNum));       
// 2, 4   -> parse 형식의 변환은 2번째 인자에 영향이 간다. 

// 그러므로 for문으로 반복한다.
// let sum = 0;
// for(let key in getNum){
//      console.log(parseInt(getNum[key], 10))
     
// }

// 3. 제곱 구하기 

// var pow = Math.pow(num);
// console.log(pow)

//? 생각이 꼬인거 같아서 그냥 배열의 키값을 인자로 넣었다. 
console.log(Math.pow(getNum[0], getNum[1])); // ! 아래 해답과 비고해서 내가 한 것은 문자열 상태인 값을 넣었으므로 거의 요행이나 마찬가지..




//해답 

const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10))); 