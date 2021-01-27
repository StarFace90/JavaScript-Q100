// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 //!절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

//다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.


//풀이
// [27, 10, 12, 20, 25, 13, 15, 22] -> [10,12,13,15,20,22,25,27]

function mergeSort(arr) {
    if (arr.length <= 1) {  // 리스트 길이가 0또는 1이면 정렬된 것으로 보고 리턴
        return arr;
    }

    const mid = Math.floor(arr.length / 2); // 배열을 두 리스트로 나눈다.
    const left = arr.slice(0, mid);  // 왼쪽을, slice(0, mid)로 자른다.
    const right = arr.slice(mid);    // 오른쪽을 slice(mid)로 자른다.

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    // 여기부터 빈칸
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

var array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));





// 해답 
// 빈칸 채우기라 코드의 흐름을 파악하고 문제를 풀 수 있었지만,
// 아무것도 없는 상태에서 코드를 만들 수 있을 때 까지 연습이 필요하다.

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));
