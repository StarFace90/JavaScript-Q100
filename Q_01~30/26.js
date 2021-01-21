// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.


// 풀이 

// 한글 이름 -> 영어 이름   수성 === Mercury

// 수성 = 0, Mercury = 0 처럼 코드를 맞춰주어야 할 것 같다. 한글 코드와 영어코드가 같을 경우 영어를 출력하는 방법으로?!  
// 배열의 인덱스 끼리 맞춰서 검색되게 끔??

// var planetKr = prompt('행성 이름을 입력하세요');

// let planetKr = ['수성'];

// let planetEng = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// console.log(planetKr);
// console.log(planetEng);
// console.log(planetKr.indexOf('수성')); //0
// console.log(planetEng.indexOf('Mercury')); //0
// ...for문을 통해 index를 맞추는 방법을 택했지만 너무 길어지고 있어서 삭제.


// 간단하게 조건문을 사용해서 출력하는 방식으로 선회.

function planetKE(n) {
    switch (n) {
        case '수성':
            console.log('Mercury');
            break;
        case '금성':
            console.log('Venus');
            break;
        case '지구':
            console.log('Earth');
            break;
        case '화성':
            console.log('Mars');
            break;
        case '목성':
            console.log('Jupiter');
            break;
        case '토성':
            console.log('Saturn');
            break;
        case '천왕성':
            console.log('Uranus');
            break;
        case '해왕성':
            console.log('Neptune');
            break;
        default:
            console.log('해당되는 행성이 아닙니다.')
            break;
    }
}


var n = prompt('행성이름을 입력하세요');

planetKE(n)




// 해답 
//? 객체 형태로 좀 더 간결하게 작성...!

const planets = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune',
};

const name = prompt("행성의 이름을 입력하세요.");

console.log(planets[name]);
