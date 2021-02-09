// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// 출력
// [[1, 6], [2, 12]]




// ? 풀이 

/**
 * 
 *  행렬의 곱셈법을 살펴보면 
 * 1. 앞 행렬의 1행의 성분 과, 뒤 행렬의 1열의 성분을 같은 위치에 있는 것 끼리 곱한다.
 * 그런 후 결과의 행렬의 1행 1열에 1번에서 얻은 두개를 더한 값을 써준다.
 * 
 * 2. 앞 행렬의 1행의 성분과, 뒤 행렬의 2열의 성분을 같은 위치에 있는 것 끼리 곱한다.
 * 그런 후 그 행렬의 1행 2열의 교차점에 두개를 더한 값을 써준다.
 * 
 * [[1,2],[2,4]] * [[1,0],[0,3]] 이면  
 * 
 * 1번과정 : 1 * 1 , 2 * 0 = [1+0] = 1
 * 2번과정 : 1 * 0 , 2 * 3 = [0+6] = 6
 * 3번과정 : 2 * 1 , 4 * 0 = [2+0] = 2
 * 4번과정 : 2 * 0 , 4 * 3 = [0+12] = 12
 * 
 * 최종결과 [[1,6], [2,12]];
 * 
 * 
 * 행렬의 곱셈이 불가능한 경우
 * : 앞 행렬의 행의 성분의 개수가 뒤 행렬의 열의 성분의 개수가 다른경우
 * : 앞 행렬의 열의 개수와, 뒤 행렬의 행의 개수가 다른경우 
 * [a * b] * [c * d] 이라면 b, c가 같아야한다.
 * 
 */


function mulArray(front, back) {
    // 배열 풀기 
    let flatA = front.reduce((acc, cur) => acc.concat(cur));
    console.log(flatA); // [1,2,2,4];
    let flatB = back.reduce((acc, cur) => acc.concat(cur));
    console.log(flatB); // [1,0,0,3];

    let arr = [];

    // 1번 과정     flatA의 [0] * flatB의 [0] + flatA의[1] * flatB의 [1]
    for (let i = 0; i < flatA.length; i++) {
        for (let j = 0; j < flatB.length; j++) {
            // if (i === 0 || i === 2) {
            //     while (j < 3) {
            //         let newA = flatA[i] * flatB[j];
            //         let newC = flatA[]
            //         console.log(c);
            //         j++;
            //     }
            // }
            switch (i) {
                case 0:
                    while (j < 3) {
                        let t = [];
                        //let count = 0;
                        t.push(flatA[i] * flatB[j]);
                        var newA = t.reduce((acc, cur) => acc + cur);
                        j++

                    }

                    arr.push("A", newA);
                    console.log('결과', arr);

                    break;
                case 1:
                    if (j === 1 || j === 3) {
                        let r = [];
                        r.push(flatA[i] * flatB[j]);
                        var newB = r.reduce((acc, cur) => acc + cur);
                        j++
                    }
                    arr.push(newB);
                    console.log('결과', arr);

                    break;

                case 2:
                    while (j < 3) {
                        let y = [];
                        y.push(flatA[i] * flatB[j]);
                        var newC = y.reduce((acc, cur) => acc + cur);
                        j++
                    }
                    arr.push(newC);
                    console.log('결과', arr);
                    break;
                case 3:
                    if (j === 1 || j === 3) {
                        let u = [];
                        u.push(flatA[i] * flatB[j]);
                        var newD = u.reduce((acc, cur) => acc + cur);
                        j++
                    }
                    arr.push(newD);
                    console.log('결과', arr);

                    break;

                default:
                    console.length('인덱스가 올바르지 않습니다.')
                    break;
            }


        }
    }
    console.log('누적', arr)
    console.log(`1---(${flatA[0] * flatB[0]}) + (${flatA[1] * flatB[1]})`);
    console.log(`2---(${flatA[0] * flatB[2]}) + (${flatA[1] * flatB[3]})`);
    console.log(`3---(${flatA[2] * flatB[0]}) + (${flatA[3] * flatB[1]})`);
    console.log(`4---(${flatA[2] * flatB[2]}) + (${flatA[3] * flatB[3]})`);

    // 규칙..
    // a[0](1) = b[0,1,2];    [1 * 1, 1 * 0, 1 * 0];     ->   [1,0,0];  [1]
    // a[1](2) = b[1,3];      [2 * 0,  2 * 3];           ->   [0, 6];   [6]
    // a[2](2) = b[0,1,2];    [2 * 1,  2 * 0, 2 * 0];    ->   [2,0,0];  [2]
    // a[3](4) = b[1,3];      [4 * 0,  4 * 3];           ->   [0, 12];  [12]
}


let a = [[1, 2], [2, 4]];

let b = [[1, 0], [0, 3]];

mulArray(a, b);






// 해답 

// 문제를 푸는데 시간도 너무 오래 걸렸고, 다 풀지도 못했지만..
// 1차원 배열로 만들어서 풀려고 했던게 오히려 더 어렵게 했던 것 같다.
// for문에 if문에 while, switch 까지.. 
// 복잡도도 커지고, 써야하는 코드 낭비도 너무 심할 것 같다는 생각이 들었다.
// 규칙을 발견했지만, 배열이  3 * 3 이라면? 다양한 경우에서는 적용이 어려울 것이라는 생각이 들었다.
// 배열 곱하기가 되지 않는 경우도 생각못했다.
// 문제 푸는 시간을 제한 없이 풀어야겠다..

function solution(a, b) {
    let c = [];
    const len = a[0].length;

    if (len === b.length) {
        for (let i = 0; i < len; i++) {
            let row = [];
            for (let j = 0; j < len; j++) {
                let x = 0;
                for (let k = 0; k < len; k++) {
                    x += a[i][k] * b[k][j];
                }
                row.push(x);
            }
            c.push(row);
        }
        return c;
    } else {
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));