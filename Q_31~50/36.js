// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18


//? 풀이 

// 구구단은  2 * 1 =2 ~ 2 * 9 = 18 이런식으로 (n * 1) ~ (n * 9) 형태로 되어야 할 것 
// 주어진 문자가 하나이므로 반복문을 사용해 구구단의 범위로 계산 후 숫자형태로 변경

//let start = '2';
const start = prompt('1~9까지의 숫자 중 하나를 입력하세요')
let empty = '';   // 33번 문제처럼 출력을 문자열로 하는 것이라면 빈 문자열을 만들어서 구구단을 하나씩 넣자
let emArr = [];   // 만들어진 구구단 문자열을 빈배열에 넣는 작업을 할 것 -> 마지막에 다시 띄어쓰기 된 문자열로 만들기 위해


function multiplication(start) {

    for (let i = 1; i < 10; i++) {  // i의 범위는 1 ~ 9까지 주어진 숫자와 곱하는 범위
        //console.log(start * i)   // 문자열 뒤에 곱하기를 해주면 문자열이 숫자로 변환된다.  문자열 앞에 +를 붙여도 마찬가지
        empty = (parseInt(start, 10) * i)// 하지만 오류의 위험성이 있으므로 parseInt를 통해 정수로 변환하고 빈 문자열에 넣는다.

        emArr.push(empty)  // 위의 결과를 빈 배열에 순서대로 넣는다.
        result = emArr.join(' ') // join을 통해서 띄어쓰기 된 문자열로 변환한다.
    }
    console.log(result)
    return result
}

multiplication(start)


// 해답 
//? 해답 처럼 간결하게 생각을 해봐야겠다. 시간복잡도도 생각해야..

const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i = 1; i <= 9; i++) {
    result += i * num + ' ';
}

console.log(result);