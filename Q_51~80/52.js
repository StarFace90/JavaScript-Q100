
// 빈칸을 채워 quick sort를 완성하라 

// 퀵 정렬 -> merge 정렬과 달리 리스트를 비균등하게 분할 한다.
// 리스트 안에 있는 한 요소를 선택한다 (pivot)
// pivot을 기준으로 작은 요소들은 모두 왼쪽으로, 큰 요소들은 오른쪽으로 옮겨진다.
// pivot을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
// 분할된 부분리스트에 대해 순환 호출 (재귀)를 이용해서 정렬을 반복한다.
// 부분리스트에서도 다시 pivot을 정하고 2개의 부분리스트로 나누는 과정을 반복한다.
// 부분리스트들이 분할 불가능할 때 까지 반복한다. -> 리스트의 크기가 0이나 1이 될 때 까지 반복한다.




//? 풀이 

// [5,3,8,4,9,1,6,2,7] -> [1,2,3,4,5,6,7,8,9]
function quickSort(arr) {
    if (arr.length <= 1) {  // 리스트의 크기가 0이나 1이면 리턴
        return arr;
    }

    const pivot = arr[0]; // 피벗을 5로 설정 
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        // 빈칸채우기
        if (pivot > arr[i]) {  // 피벗보다 작으면 왼쪽으로 
            left.push(arr[i]); // 
        } else { // 피벗보다 크면 오른쪽으로 
            right.push(arr[i]);
        }
    }
    // 분할된 부분리스트에 대해 순환 호출 (재귀)를 이용해서 정렬을 반복한다.
    return quickSort(left).concat(pivot, quickSort(right))
}

//var array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
var array = '5 3 8 4 9 1 6 2 7'.split(' ').map(n => parseInt(n, 10));
console.log(quickSort(array));






// 해답 
// 51번과 마찬가지로 뼈대를 만들줄 알아야한다.
// divide, conquer, combine의 함수를 만들면 더 좋을 것 같다.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));