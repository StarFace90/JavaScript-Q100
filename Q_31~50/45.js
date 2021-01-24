// Date객체의 메소드 중 하나인
// getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(2021)를 출력해보세요.

// 1시간은 3600초 
// 3600 * 24 
// 하루는 86400초
// 86400 * 365 = 1년



let date = new Date();
let dateTime = date.getTime()
//console.log("현재시각:", dateTime)
//console.log("현재시각:", date)
//let cul = dateTime - (86400 * 365)

let newDate = new Date((dateTime / (86400 * 365 * 1000)) + 1970)
let newDateTime = newDate.getTime()
console.log("변환된년도", newDateTime)
//console.log("변환된시간", newDate)
//(86400 * 365 * 1000) -> 51이 나왔다. 여기에 1970을 더하면 현재 년도

// 2021 - 1970 = 51 인데 뭔가 시간을 다뤄서 변환된 수를 -> 변수에 넣고 출력하는 것으로 

// console.log(dateTime - newDateTime) // 86400 하루의 차이가 난다. 
//// console.log(Math.floor(dateTime / newDateTime)) // 1.0000000536160385 하루의 차이가 난다. 
// // 2번째를 이용해서 구하면 될듯?


// 풀이 
// 좀더 깔끔하게 풀어야겠다. 

const d = new Date();

let year = d.getTime();
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970

console.log(year);