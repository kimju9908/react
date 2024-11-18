import JsxSytax from "./Jsx문법";
import "./App.css";
import GreetingComponent from "./GreetingComponent";
import WelcomeProps from "./WelcomeProps";
import MyComponet from "./MyComponet";
import BoxComponent from "./BoxComponent";

function App() {
  const name = "김주혁";
  const member = "false";
  return (
    <>
      <h1></h1>
      {/* <JsxSytax/>
    <GreetingComponent/>
     */}
      {/* <WelcomeProps
        name="곰돌이사육사"
        job="개발자"
        addr="서울시 강남구"
        isAdult={true}
      /> */}
      <MyComponet name="안유진" age={21} />
      <BoxComponent>sdsa</BoxComponent>
    </>
  );
}

export default App;
