//--01--
// ES5, ES6에서 대부분 정의
// jQuery, dojo, mootools 같은 lib 도움 없이도 충분히 js와 web APIS에서 제공하는 API만으로도 모든 웹사이트에서 작동 가능

// JS engines
// Chrome : V8, Firefox : spiderMonkey, Safari : JSCore, MS Edge : Chakra, Opera : Carakan, Adobe Flash : Tamarin
// V8 : node.js와 ELECTRON에서도 많이 이용, 2020년 2월 경 MS Edge에서도 사용
// Javascript transcompiler : BABEL

// SPA(Single Page Application) : 하나의 페이지 안에서 데이터를 받아와서 필요한 부분만 부분적으로 업데이트

//--02--
// 공식사이트로 공부하고 찾아가며 개발하기
// ecma-international.org : 공식사이트
// developer.mozilla.org : 많은 개발자들이 공식사이트처럼 사용
// www.w3schools.com : 노르웨이 회사가 만든 사이트 공식사이트는 아님

//--03--
// 1. Use strict
// added in ES5
// use this for Vanila JS
// JavaScript is very flexible
// flexible === dangerous
// use strict를 선언하면 정의되어 있지 않는 변수들 에러처리, 선언하지 않으면 브라우저에서 문제없이 나옴
// 상식적인 범위 내에서, 효율적인 성능개선 가능
'use strict';
 
// 2. Variable

// 1) let (added in ES6)
// mmutable type
// Global scope : 어느 곳에서나 접근 가능
// APP이 시작하고 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 사용하는 것이 좋음
// 가급적이면 class나 함수, if, for loop 필요한 부분에서만 정의해서 사용하는 것이 좋음
// 변수 선언할 수 있는 키워드는 딱 하나 let! var는 X
let globalName = 'jellina';

{
    // Block scope
    let name = 'sujin';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name); // 접근 불가능
console.log(globalName);

// 2) Constants
// Immutable type
// 한 번 할당하면 변경이 안됨
// security, thread safety, reduce human mistakes

const daysInweek = 7;
const maxNumber = 5;

// 3) Variable Types
// primitive, single item : number, string, boolean, null, undefiend, symbol
// object, box container
// object : single item들을 여러개 묶어서 한 단위로, 박스로 관리할 수 있는 것
// function, first-class function
// first-class function : function도 다른 데이터 타입처럼 변수 할당 가능, 함수의 파라미터로도 전달, 리턴도 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// 항상 연산 전에 값 확인 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 끝에 n을 붙이면 bigInt로 간주 하지만 크롬이랑 파이어폭스만 지원
const bigInt = 12345678901234567890n; 
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
// template literals (string)
// ``기호를 이용해서 원하는 string 적고 ${a} a의 변수 값이 나옴
const helloBob = `hi ${brendan}!`;
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 0;
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
// empty값이라고 지정
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
// 선언은 되었지만 아무것도 값이 지정이 되어있지 않음
let x = undefined;
let x2;
console.log(`value : ${x}, type : ${typeof x}`);
console.log(`value : ${x2}, type : ${typeof x2}`);

// symbol
// map이나 자료구조에서 고유한 식별자가 필요하거나, 동시 다발적으로 일어나는 상황에서 우선순위를 주고싶을 때
// 고유한 식별자를 쓰고 싶을 때 사용
// 간혹 식별자를 string으로 사용하는 경우도 있음

// 이 두가지는 다른 경우
// 동일한 string을 적어도 다른 symbol로 만들어짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 동일하게 만들고 싶은 경우
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

// 바로출력하면 에러
// console.log(`value : ${symbol1}, type : ${typeof symbol1}`);

// 항상 symbol은 .description 으로 string으로 바꿔준 후 출력해야함
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// object, real-life object, data structure
const sujin = { name : 'sujin', age : 20 };
sujin.age = 21;

// 4) Dynamic typing : dynamically typed language
