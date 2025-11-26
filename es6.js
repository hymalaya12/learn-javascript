const user = {
  isLoggedIn: false,
  role: "user", // 'guest', 'admin' 값이 있을 수 있음
};

// 관리자 페이지 접근 로직
if (user.isLoggedIn && user.role === "admin") {
  console.log("👌 접근가능");
} else {
  console.log("😂 접근불가");
}
// 일반 페이지 접근 로직
if (user.isLoggedIn || user.role === "admin") {
  console.log("👌 일반 페이지 접근가능");
} else {
  console.log("😂 일반 페이지 접근불가");
}

if (!user.isLoggedIn) {
  // 로그인되지 않은 사용자인 경우
  console.log("로그인 해주세요");
}
// default parameter
const sayHello = (username = "사용자", usermbti = "aaaa") => {
  // 실행할 로직들
  //console.log("반갑습니다. " + username + "님!" + "mbti는 " + usermbyi + "이시군요");
  // 백틱 : 문자열과 변수를 손쉽게 이어주는 문법
  console.log(`반갑습니다. ${username}님! MBTI는 ${usermbti}이시군요`);
};
sayHello("후츠릿");
sayHello("최지욱", "INTP");

//재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"];

// 구조분해할당
const [first, second, third] = ingredients;
console.log("🚀 ~ first:", first);
console.log("🚀 ~ second:", second);
console.log("🚀 ~ third:", third);

const todoItem = {
  todo: "React 학습하기",
  isComplete: false,
};

const { todo: text, isComplete } = todoItem;
console.log("🚀 ~ todo:", text);
console.log("🚀 ~ isComplete:", isComplete);

const copyIngredients = ["방울토마토", ...ingredients, "방울토마토"];
console.log("🚀 ~ copyIngredients:", copyIngredients);

const copyTodoItem = {
  ...todoItem,
  description: "React 공부 할거예요",
  isComplete: true,
};
console.log("🚀 ~  copyTodoItem:", copyTodoItem);
