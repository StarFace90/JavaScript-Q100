// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

let nums = [100, 200, 300, 400, 500];


// 풀이 

let solution = nums.splice(3,2) // 인덱스 3번부터 2개의 요소 삭제
console.log(solution)
console.log(nums) //! 원본 배열의 요소가 변한다. 



// 답안

let numsAnswer = [100, 200, 300, 400, 500];
numsAnswer.pop();
numsAnswer.pop();
console.log(numsAnswer)