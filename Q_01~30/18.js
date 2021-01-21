// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30



// 풀이 

// 평균 점수 : ( 국어 + 수학 + 영어 ) / 전체 과목 수 (3)
// 조건 : 소수점 자리는 버린다. 

var korea = parseInt(prompt('국어 점수를 입력하세요'));  // 문자열이므로 parseInt를 통해 숫자형으로 바꾼다. 
var math = parseInt(prompt('수학 점수를 입력하세요'));
var english = parseInt(prompt('영어 점수를 입력하세요'));

//! parseInt는 문자열을 따져 진법에 맞게 변환하므로 
//// parseFloat를 사용하는 것이 좋다.
//? parseInt는 문자열을 정수로 , parseFloat는 문자열을 실수로 바꾼다.
//! 또는 문자열 앞에 단항 연산자 + 를 붙이면 숫자타입으로 변환되어 리턴한다. 변경할 수 없으면 NaN이 리턴된다. 
//! 또는 문자열에 * 1을 해주면 숫자로 변환 된다. 

var average = (korea + math + english) / 3;
var deletePoint = Math.floor(average);  // 소수점 자리 버리라고 했으므로 반올림 상관없이 버린다. 

console.log(`세 점수의 평균은 ${deletePoint} 입니다.`);






//? 해답  (반복문을 통해서도 가능하다는 것을 염두!)

const scores = prompt('세 과목의 점수를 입력하세요.').split(' '); //? 문자열을 split을 통해 나누고 배열로 변환 
let sum = 0;

for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.  //! 진수에 대해서 익혀둘 것 
}

console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.