import logo from "./logo.svg";
import "./App.css";
// [JSX  문법이해하기]

// JSX에 표혀식 포함하기 {변수 OR 연삭식}
// 감싸인 요소로 표현하기 : 컴퍼넌트를 반환 시 하나의 태그이어야 함, <> </>
// 조건부 랜더링 : JSX문 내부에서는 조건부 연산자 사용 가능
// 3항 연산자 사용으로 참인 경우와 거짓인 겨우에 화면을 다양하게

// 인라인 스타일링 : 문자열 형태가 아니고 객체 형태로 만들어야 함
const inlineStyle = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontsize: "2em",
};

function App() {
  const name = "김주혁";
  const member = "false";
  return (
    <>
      <h1 style={inlineStyle}>{name}리액트 공부를 시작하겠습니다.</h1>
      <p>리액트는 jsx문법을 사용하고 리턴문내에서 작성합니다.</p>
      {name === "김주혁" ? (
        <h1>리액트를 공부하겠습니다.</h1>
      ) : (
        <h1>자바스크립트를 공부 하겠습니다.</h1>
      )}
      <>
        <h1>환영합니다 고객님</h1>
        <p> 해당 메뉴를</p>
      </>
    </>
  );
}

export default App;
