// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.


//?풀이


let a = [1, 2, 3, 4];
let b = ['a', 'b', 'c', 'd'];

let result = [];

// [] 안에 []을 넣고 , [[1, a], [b, 2], [3, c], [d, 4]] 에서 공통적인 것은 홀수 일 때는 a가 앞에 또는 짝수일 때는 a가 뒤에 온다는 것
// 그렇다면 result에다가 = 배열을 push [[],[],[],[]] 할 수 있게 !
// 홀수 이면 [a, b] 짝수이면 [b , a]

// 이런식으로 console.log(result.push([a[0], b[0]]))

for (let i in a) {
    // 홀수 이면
    if (a[i] % 3 === 1) {
        result.push([a[i], b[i]])
    } else {
        result.push([b[i], a[i]])
    }
}

console.log(result)




// 해답 
// 비슷하게 풀었으나, 내 풀이는 음.. 뭔가 자꾸 쓰는 메서드만 쓰는 거 같아 아쉽다.
// forEach나 Map등의 메서드가 바로바로 떠오르지 않는 것은 그만큼 자주 사용하지 않아서 이겠지..


// 방법 1 - forEach 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach(function (e, i) {
    if (i % 2 === 0) {
        c.push([e, b[i]]);
    } else {
        c.push([b[i], e]);
    }
});

console.log(c);



// 방법 2 - map 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let c = a.map(function (e, i) {
    if (i % 2 === 0) {
        return [e, b[i]];
    } else {
        return [b[i], e];
    }
});

console.log(c);