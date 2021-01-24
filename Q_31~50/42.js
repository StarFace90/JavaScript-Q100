// 2020년 1월 1일은 수요일입니다. 2021년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2021년은 윤년입니다.
// 2021년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)


// 풀이 

// 1: 31 2: 28 3:31 4:30 5:31 6:30 7:31 8:31 9:30 10:31(일) 11:30(화) 12:31(금) 


// a는 월)(1~12) b는 일(1~31)

// date 함수를 이용해서 풀어보자 

//let n = [12, 19]
var md = prompt('월과 일을 입력해 주세요').split(' ');
//var md = ['12', '19'];
let a = parseInt(md[0], 10)
let b = parseInt(md[1], 10)

let n = [a, b]

// 다시 입력한다. 
function checkAgain() {
    md = prompt('월과 일을 입력해 주세요').split(' ');
    a = parseInt(md[0], 10)
    b = parseInt(md[1], 10)
    n = [a, b]
    return checkMonthDay(n)
}


function checkMonthDay(n) {
    // 월,일 에대한 유효성 검사
    if ((n[0] > 12) || (n[0] < 1)) {
        console.log(`${n[0]}월은 없습니다. 월은 1 ~ 12월 까지 입니다. 다시 입력하세요`)
        //return console.log(n)
        return checkAgain()
    } else if ((n[1] > 31) || (n[1] < 1)) {
        console.log(`${n[1]}일은 없습니다. 일은 1 ~ 31일 까지 입니다. 다시 입력하세요`)
        //return console.log(n)
        return checkAgain()
    }
    // 2월에 대한 유효성 검사
    else if (n[0] === 2 && n[1] > 29) {
        console.log("2021년 2월은 28일까지만 있습니다.");
        // return console.log(n)
        return checkAgain()
    }
    // 30일 까지만 존재하는 월에 대한 유효성 검사
    else if ((n[0] === 4 || n[0] === 6 || n[0] === 9 || n[0] === 11) && n[1] > 30) {
        console.log(`2021년 ${n[0]}월은 30일까지만 있습니다.`)
        //return console.log(n)
        return checkAgain()
    }
    return solution(n)
}

// 올바른 월과 일을 입력하면 실행
function solution(n) {
    let date = new Date()
    console.log("오늘날짜", date)
    //console.log(n[1])

    date.setMonth((n[0] - 1), n[1])
    //console.log("변환날짜", date)

    let setDate = date.toDateString().split(' ');

    let dateToStr = setDate[0].toUpperCase()

    console.log(`${n[0]}월 ${n[1]}일은, ${dateToStr}입니다.`)
    return console.log(dateToStr)
}

checkMonthDay(n)





// ? 해답 
// 얼추 비슷하게 푼 것 같다. 
// 2월 31일 의 경우 3월로 변환되어 나오기 때문에 유효성 검사가 필요하다.
// 나의 경우 원본 Date가 변형되기 때문에 아래와 같이 간결하게 바꿔야겠다.

const month = prompt('월을 입력하세요.');
const date = prompt('일을 입력하세요.');

function solution(a, b) {
    const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const x = new Date('2020-' + a + '-' + b);
    return day[x.getDay()];

}
console.log(solution(month, date));