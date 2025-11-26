// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"]; // 배열

// 반복문
ingredients.forEach((value, index) => {
  // 배열을 순회하면서 n번 실행
  console.log(`${index}번때 데이터: ${value}`);
});

const messages = [
  {
    username: "맛있는 쉐프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래. 너는 이름이 워야?",
  },
];

messages.forEach((item) => {
  // 반복 실행 구문
  // item : 객체
  console.log(item.message);
});

const names = ["alice", "bob", "kelly", "david"];

const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const filterNames = names.filter((name) => name.length >= 4);
console.log("🚀 ~ filterNames:", filterNames);

const findName = names.find((name) => name.length >= 4);
console.log("🚀 ~ findName:", findName);

// some의 요소 중 하나라도 조건을 만족하면 true, 그렇지 않으면 false
// every: 배열의 모든 요소가 조건을 만족해야만 true, 그렇지 않으면 false

const someName = names.some((name) => name.length >= 4); // true
console.log("🚀 ~ someName:", someName);

const everyName = names.everyName((name) => name.length >= 4); // true
console.log("🚀 ~ every:", everyName);

// 문제 1
// function add(a, b) {
// return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;
console.log(add(5, 3)); // 예상 결과: 8

// 문제 7
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0); // 여기에 코드를 작성하세요.
console.log(evenNumbers); // 예상 결과: [2, 4, 6]
