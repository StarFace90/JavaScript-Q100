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
                        let r = [];
                        r.push(flatA[i] * flatB[j]);
                        var newA = r.reduce((acc, cur) => acc + cur);
                        j++
                    }
                    arr.push(newA);
                    console.log('결과', arr);
                    break;
                case 1:
                    if (j === 1 || j === 3) {
                        let newB = [flatA[i] * flatB[j]];
                        console.log(newB);
                    }

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
                        let newD = [flatA[i] * flatB[j]];
                        console.log(newD);
                    }

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

    // a[0](1) = b[0,1,2];    [1 * 1, 1 * 0, 1 * 0];     ->   [1,0,0];  [1]
    // a[1](2) = b[1,3];      [2 * 0,  2 * 3];           ->   [0, 6];   [6]
    // a[2](2) = b[0,1,2];    [2 * 1,  2 * 0, 2 * 0];    ->   [2,0,0];  [2]
    // a[3](4) = b[1,3];      [4 * 0,  4 * 3];           ->   [0, 12];  [12]
}


let a = [[1, 2], [2, 4]];

let b = [[1, 0], [0, 3]];

mulArray(a, b);

