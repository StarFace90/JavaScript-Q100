// 숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)


// 풀이 : 소수는 1보다 큰 양의 정수 이므로 2 부터 시작 되는 1과 자기 자신만으로 나누어 떨어진다. 
// //주어진 숫자 4,  2~4 2,3,4 반복 4 % 2, 4 % 3, 4 % 4
// 출력 결과는 boolean 형 

// ? 중요한 것은 약수와 헷갈리면 안된다.
// 약수는 나눠서 나머지가 0, 소수는 1과 자기 자신


let n = 15// 1, 3으로 소수이다. 


// 소수인 경우 체크 
// 2부터 시작하는 1과 자기 자신
// 2를 소수라고 설정하고 -> 이외의 숫자부터는 2와 나누어 떨어지면 약수, 나머지가 생기면 소수
// 15일 경우는 2로 나누면 나머지가 1이 나온다. 15는 소수가 아니다.

// n이 2라면 YES

for (let i = 2; i < n; i++) {

    let result = n % i

    // 나누어 떨어진다. 나머지가 없다. 
    if (result === 0) { // n = 15일 경우 , i가 3, 5일 경우 
        //console.log(`for-${i}회차: ${n}는 소수가 아니다.`);
        // 이쪽으로 출력되면 그대로 출력한다. 
        return console.log(`${n}는 소수가 아닙니다.`)

        // 나머지가 있다.    
    } // else문을 주석처리 해서 밑의 if문에서 처리한다. 하나만 출력되게 끔
    // else {
    //     // 현재까지 문제점 : 반복문으로 인해 결과가 반복 출력된다. i가 증가하면서 소수로 출력되는 케이스가 있다. 
    //     console.log(`for-${i}회차: ${n}는 소수이다.`)
    // }
}
// 소수가 아니라면 위 return 문에서 끝남
//console.log(n)

if (n === 1 || n === 0) {
    console.log(`${n}은 소수가 아닙니다.`)
} else {
    console.log(`${n}는 소수이다.`);
}


// ? 프로그램화 정리 => 


var n = parseInt(prompt("정수를 입력해주세요"), 10)

function checkDecimal(n) {

    for (let i = 2; i < n; i++) {
        let result = n % i

        if (result === 0) {
            return console.log(`${n}은 소수가 아닙니다.`)
        }
    }

    if (n === 1 || n === 0) {
        console.log(`${n}은 소수가 아닙니다.`)
    } else {
        console.log(`${n}은 소수이다.`);
    }

}

checkDecimal(n)







// 해답 
// 거의 비슷하게 풀었다. 


const num = prompt('숫자를 입력하세요.');

function check_prime(num) {
    for (let i = 2; i < num; i++) {
        const result = num % i;
        if (result === 0) {
            console.log('NO');
            return false;
        }
    }
    if (num === 1) {
        console.log('NO');
        return;
    }
    console.log('YES');
}

check_prime(num);