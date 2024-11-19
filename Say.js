import Reactm,{useState} from "react";
import styled from "styled-components";

const ButtonContainer = styled.div `
display : flex;
gap : 10px;
margin-bottom :10px;
;
`

const Button = styled.button`
  box-sizing: border-box;
  width: 150px ;
  padding: 10px 20px ;
  border-radius: 8px;
  background-color: #eee;
  color :${props=>props.color || "black"};
`;
const Say = () => {
  
  const  [message,setMessage] = useState("");
  const  [value, setValue] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요");

  return(
    <>
    <   button onclick ={onClickEnter}>입장</>
    <button onclick ={onClickLeave}>퇴장</button>
    <h1 style ={{color:value}}>{message}</h1>
    <ButtonContainer>
    <Button color = "red" onclick={()=>setValue('red')}>빨간색</Button>
    <Button  color = "blue" onclick={()=>setValue('bluse')}>파랑색</Button>
    <Button  color = "green" onclick={()=>setValue('red')}>초록색</Button>
    </ButtonContainer>
    </>
  );
}
export default Say;