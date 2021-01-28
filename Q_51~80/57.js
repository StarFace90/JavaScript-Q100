// **0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다.
// 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 
// 11은 1이 2번 들어간 셈이죠.

// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.



//? 풀이 

// 0 부터 1000까지의 수를 만들자. 입력받는 게 없으므로 

let arr = []

for (let i = 0; i <= 1000; i++) {
    //console.log(i)
    // 숫자만 가지고는 아무것도 할 수 없으므로 이것을 빈 배열이나, 빈 문자열로 넣는다.
    arr += i
    //console.log(arr) // 0~1000까지의 딱 붙는 형태가 됨
}
let count = 0
for (let key in arr) {
    // key가 1이면 카운트 1씩 증가 
    if (arr[key] === '1') {
        count++
        // console.log(count)
    }
}
console.log(count)





// 해답 

// 오 그래도 내가 푼 방법이 이 중에 있어서 다행이다.
// for of나 정규표현식은 한번도 사용해 본적이 없는데 사용하는데 익숙해져야겠다.
// 특히 정규표현식을 사용하면 코드가 간결해진다.

//1번 답안 - 고전적인 방법
const obj = {};

for (let i = 0; i <= 1000; i++) {
    let tmp = i;
    while (tmp > 0) {
        let num = tmp % 10;
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp / 10, 10);
    }
}

console.log(obj[1]);

//2번 답안 - 정규표현식 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
    s += i;
}
console.log(s);
console.log(s.match(/1/g).length);

//3번 답안 - for in 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
    s += i;
}
let count = 0;
for (let j in s) {
    if (s[j] == 1) {
        count++;
    }
}
console.log(count);

//4번답안 - for of 사용
let s = '';
for (let i = 0; i <= 1000; i++) {
    s += i;
}
let count = 0;
for (let j of s) {
    if (j == 1) {
        count++;
    }
}
console.log(count);