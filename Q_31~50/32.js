// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다.

// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램**을 작성해 주세요.


// **입출력**

// 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
// 출력 : 5


// 풀이 
// 예시의 입력을 살펴보면 띄어쓰기 된 부분이 단어라고 가정하면, 출력인 5가 된다. 
// 이게 맞다고 가정한다면, 문자열을 띄어쓰기로 구분하여 나누고, 배열의 길이를 구하면 될 것으로 보인다. 
// 나누기 => split(' ')

var word = prompt('문자를 입력하세요')  // 크롬 콘솔용

//let word = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다." (터미널 테스트용)


var wordLength = function (word) {
    let wordSplit = word.split(' ');
    console.log(wordSplit.length)
}

wordLength(word);





// 해답 

const string = prompt('문자열을 입력하세요.').split(' ');

console.log(string.length);