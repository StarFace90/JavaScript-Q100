// 순회하는 리스트
/**
 * 다음의 값이 주어졌을 때,
 * l = [10, 20, 25, 27, 34, 35, 39]
 *
 * n번 순회를 결정한다. 예로 2번 순회하면
 * l = [35, 39, 10, 20, 25, 27, 34]
 *
 * 문제 : 변하기전 원소와 변한 후 원소의 값 차가 가장 작은 값을 출력하는 프로그램을 작성하라.
 *
 * 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같다.
 *
 * 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
 * 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
 * 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]
 *
 * 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

** 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

** 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
** 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
** 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

* ? 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다.
* ? 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.
 */

/*
*   const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
*   const n = parseInt(prompt('순회횟수는?), 10);

*    function rotate(inL, inN){

*         <빈칸을 채워주세요>
*     }

rotate(l, n)
*/


// **입력**                      // **입력**
// 순회횟수는 : 2                  순회횟수는 : 3

// **출력**                     // **출력**
// index : 6                    // index : 5
// value : 39, 34              // value : 35, 25




// ? 풀이 
// 갈 수록 문제가 길어진다.
// input 값에 따라 리스트의 순서가 달라지는 것 을 알 수 있다.
// 순회 횟수가 2일 때, index 0이 었던 10은 index 2로 밀리는 것을 알 수 있다.
// 리스트의 차는 양의 정수형으로 절대값이다.


const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
//const n = parseInt(prompt('순회횟수는?'), 10);
const n = 2;

function rotate(inL, inN) {
    //console.log(...arguments);
    // 순회 전과 순회 후의 리스트를 비교해야하므로 복사한다.
    let copy = inL.slice();
    // * console.log("복사배열", copy);

    // slice를 뒤에서 부터 2개씩 해주어 이동시켜야하므로 2번 반복한다.
    for (let i = 0; i < inN; i++) {
        // * console.log(copy[i]);
        // 뒤에서 앞으로 오려면?? -> 자세히 보니까 뒤에서 부터 잘라서, 앞에서 넣어준다.
        // pop, unshift를 이용?! pop을 사용하면 39부터 아웃, unshift를 사용하면 39부터 in
        // 35부터 들어와야 하므로 
        let c = copy.slice(-inN); //[35,39], [34,35]
        // *  console.log(c);
        copy.unshift(copy.pop(c));
    }
    // *console.log("순회 전 리스트", inL);
    //* console.log("순회 후 리스트", copy);

    // 리스트의 차를 만든다. 
    // 리스트의 차를 위한 배열을 선언 
    let listMinus = [];
    // 두 리스트의 차는 절대값이어야 한다.

    for (let j = 0; j < copy.length; j++) {
        listMinus.push(Math.abs(l[j] - copy[j]));
    }
    // * console.log("리스트의 차", listMinus); //  [25, 19, 15, 7, 9, 8, 5]

    // 최소값의 인덱스 구하기
    let min = Math.min(...listMinus);
    let minIndex = listMinus.indexOf(min);
    // * console.log("인덱스 :", minIndex);


    // 최종 리턴
    return console.log("index :", minIndex), console.log("value :", inL[minIndex], copy[minIndex])

}

rotate(l, n);




// 해답 

// 풀이 접근을 거의 똑같이 한 것 같다.
// 지금까지는 주석을 적어가면서 해서 가독성이 좋지는 않은 것 같다.
// 앞으로 주석적어가면서 푼 뒤에 완성 본(코드만 있게)을 따로 적는 공간을 만들어야겠다. 깔끔하게 

function rotate(a, t) {
    let b = a.slice();
    let c = [];
    for (let i = 0; i < t; i++) {
        b.unshift(b.pop());
    }

    for (let i in a) { // let i in b 로 해도됩니다.
        c.push(Math.abs(a[i] - b[i]));
    }

    //최솟값
    const m = Math.min.apply(null, c);

    //최솟값의 인덱스 구하기
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const turn = prompt('순회 횟수는?');

rotate(l, turn);