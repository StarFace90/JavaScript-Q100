// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다.
//시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

// 버블 정렬 
// [4,2,3,8,5] => [4,2,3,5,8] => [2,4,3,5,8] => [2,3,4,5,8]





function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        // for (/*빈칸을 채워주세요.*/) {      // 이중 for문
        for (let j = 0; j < result.length - i; j++) {

            //console.log(result[i], result[j])
            if (result[j] > result[j + 1]) {  // 4 > 2
                // 4와 2 바꾸기
                let change = result[j]
                result[j] = result[j + 1]
                result[j + 1] = change
            }
        }
    }
    return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));






// 해답 
// 가이드가 주어져있기 때문에 어렵지 않게 풀 수 있었다.
// 앞으로는 자료구조도 같이 공부 해야한다. 



function bubble(arr) {
    let result = arr.slice(); // 원본 배열 복사

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));