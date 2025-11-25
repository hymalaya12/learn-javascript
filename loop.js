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
