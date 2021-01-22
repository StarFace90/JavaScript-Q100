// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
// 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력: 176 156 155 165 166 169
// 출력: NO

// 입력: 155 156 165 166 169 176
// 출력: YES



// ? 풀이 
// ? 키 순서대로 모였는지 판별해야하므로 최초 입력된 키와, 입력된 키를 바탕으로 정렬된 순서를 비교하는 과정이 필요할 것으로 보인다.
// ? [] === [] 는 false이므로 '' === ''로 비교할 것  
// Why [] === [] evaluates to false? : https://www.codecademy.com/forum_questions/5011a58ca8dcc80002001621?locale=en 
// 
// 최초 입력 키 
//let firstHeight = '176 156 155 165 166 169';
let firstHeight = prompt('키를 입력해 주세요')
console.log(firstHeight)


//let compareHeight = '176 156 155 165 166 169'.split(' ').sort((a, b) => a - b).join(' ');
let compareHeight = firstHeight.split(' ').sort((a, b) => a - b).join(' ');
console.log(compareHeight)


function compare(firstHeight, compareHeight) {
    if (firstHeight !== compareHeight) {
        console.log('NO');
    } else {
        console.log('YES');
    }
}

compare(firstHeight, compareHeight);





// 해답 
// prompt 때문에 var, let을 썼는데 const를 사용해서 변수 unsorted가 변하지 않게 했다.(생각할 것)
// 다만 문자열이기 때문에 숫자처럼 오름차순이 되지 않는 것이 아쉽다. 숫자로 변환하고 배열에 넣어서 솔팅하면 가능할 것으로 보인다.


const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
    .split(" ")
    .sort(function (a, b) {
        return a - b;
    })
    .join(" ");

if (unsorted === sorted) {
    console.log("Yes");
} else {
    console.log("No");
}