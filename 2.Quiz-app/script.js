const quizData = [
  {
    question: "몇살이니?",
    a: "10",
    b: "17",
    c: "31",
    d: "110",
    correct: "c",
  },
  {
    question: "도히는 몇살이니?",
    a: "28",
    b: "15",
    c: "11",
    d: "30",
    correct: "a",
  },
  {
    question: "복자는 몇살이니?",
    a: "6",
    b: "20",
    c: "50",
    d: "40",
    correct: "a",
  },
  {
    question: "고향이 어디니",
    a: "서울",
    b: "경기",
    c: "통영",
    d: "부산",
    correct: "c",
  },
  {
    question: "직업이 무엇이니",
    a: "목공",
    b: "상사",
    c: "변호사",
    d: "개발자",
    correct: "d",
  },
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
loadQuiz();

function loadQuiz() {
  questionEl.innerHTML = quizData[currentQuestion];
  currentQuestion++;
}
