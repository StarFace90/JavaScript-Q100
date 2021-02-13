// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 
//예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

// 입력 '93'
// 출력 10





//? 풀이


// 3, 6, 9일 때 만 박수 
// 13, 16 은 아니고 
// 33, 36, 39 일때 박수 
// 36일 때 박수이면 총 5번 
// 즉 앞이던 뒤던 3,6,9가 들어가야 박수를 치는 것 

// 입력
let n = 1000;

let count = 0;
let arr = [];

//console.log('34'.startsWith(3)); // true;


while (n > 0) {
    // console.log(n);
    let a = n.toString()
    arr.push(a);
    n--
}


arr.sort((a, b) => a - b);
console.log(arr);

let c = arr;

console.log(c.length)


for (let key in c) {

    // ? 3자리가 넘어갈경우 303도 체크되는 문제 
    // input 값이 100이 넘어가면 
    if (c.length > 99) {
        let cut = c[key].split('');
        let result = cut.every(c => c === '3' || c === '6' || c === '9');
        // every 값이 true이면 카운트 증가 
        if (result) {
            count++;
        }

    }
    // input이 99까지  [ 3,6,9로 시작하면서 3,6,9로 끝나는 것들 ]
    else if ((c[key].startsWith(3) || c[key].startsWith(6) || c[key].startsWith(9)) && (c[key].endsWith(3) || c[key].endsWith(6) || c[key].endsWith(9))) {
        console.log("1번", c[key]);
        count++;

        // [3,6,9로 끝나지 않는 모든 숫자들] : 사실 없어도 될듯
    } else if ((!c[key].endsWith(3) || !c[key].endsWith(6) || !c[key].endsWith(9)) && (!c[key].startsWith(3) || !c[key].startsWith(6) || !c[key].startsWith(9))) {
        //console.log("2번", c[key]);

    }

}

console.log("총 박수 갯수", count); // 갯수는 3,6,9 이후로 33,36,39, 63,66,69, 93,96,99  100개에서 총 12개가 나와야한다.
// 1000개 일경우 -> (~100개까지의 갯수)12 + (333, 336, 339, 363,369,366, 393,396, 399, 633, 636,639, 663, 666, 669, 693, 696, 699, 933, 936, 939, 963, 966, 969, 993, 996, 999)갯수
// 39개 







// 해답

// 정말 간결하게 풀었다..
// 나는 중간에 반복문을 두번이나 썼고, with 메소드로 검색 시간도 오래걸렸을 것 같다.
// const d = { 3: 1, 6: 2, 9: 3 }; 에 대한 것은 생각도 못했다.

function sol(n) {
    let answer = 0;
    let count = 1;
    const d = { 3: 1, 6: 2, 9: 3 };

    while (n.length !== 0) {
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3;
    }
    return answer;
}

const user_input = new String(prompt('입력해주세요')).split('');

console.log(sol(user_input));