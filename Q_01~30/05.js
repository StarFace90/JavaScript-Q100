// 다음 코드의 출력 값으로 알맞은 것은?

var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);


// 풀이 : 정답은 16

/* 
   i = 1, 2씩 증가   a = 12 + 2   i는 1,3  2번 반복할 것  a는 총 14  ,  b는 2이므로 합하면 16  
*/


// 해답 : 정답은 16

// i값이 1부터 시작하고 한번 순환할 때 마다 2씩 증가하기 때문에 for문은 총 두번 순환한다. 