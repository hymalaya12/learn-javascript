// console.log("Hello world");

// 변수
const milkCaramel = "빨간펜";
let youtube = "후츠릿"; // 문자열

youtube = "십오야";
console.log("🚀 ~ youtube:", youtube);

console.log("milkCaramel", milkCaramel);

// milk caramel -> milkCaramel(카멜케이스)

// 미션: 여러분의 나이를 age라는 변수에 담고 해당 변수를 console탭에 출력하는 코드를 작성하세요

const age = 60; // 숫자
console.log("🚀 ~ age:", age);

/**
 * 데이터타입
 * 1. 문자열 (string)
 * 2. 숫자 (number)
 * 3. boolean
 * 4. null/undefined - 값이 비어있음
 */

// 출입 가능 여부 판별
const isComming = true;
console.log("🚀 ~ isComming:", isComming, typeof isComming);
console.log("age type", typeof age);

// 함수

// 함수 정의/선언
function sayHello(username, usermbti) {
  // 실행할 로직들
  //console.log("반갑습니다. " + username + "님!" + "mbti는 " + usermbyi + "이시군요");
  // 백틱 : 문자열과 변수를 손쉽게 이어주는 문법
  console.log(`반갑습니다. ${username}님! MBTI는 ${usermbti}이시군요`);
}
// 함수 실행/호출
const data = "이영규";
sayHello("히말라야", "enfp");
sayHello(data, "intj");
// 미션 : 여러분의 이름과 MBTI를 호출해주세요
sayHello("후르츠", "Entj");

// reaturn (반환)
//function sum(num1, num2) {
// 두개의 값을 더한 값 반환
// return num1 + num2;
//}

// 화살표 함수로 변환
const sum = (num1, num2) => num1 + num2;

// 함수 호출
const result = sum(22, 40); //62
console.log("🚀 ~ con:", result);

// 미션 : UpperString라는 화살표 함수 만들기
// 기능 : 1. 파라미터로 받아온 문자열을 대문자로 변환
//       2. 변환한 문자열을 반환
// 실행
"chuzrit".toUpperCase();

// 함수정의
// const UpperString = () => {}
const upperString = (text) => {
  // 기능 : 1. 파라미터로 받아온 문자열을 대문자로 변환
  const upper = text.toUpperCase();
  //       2. 변환한 문자열을 반환
  return upper;
};
// 실행
const rasultString = upperString("chuzrit");
console.log("🚀 ~ rasultString:", rasultString);
