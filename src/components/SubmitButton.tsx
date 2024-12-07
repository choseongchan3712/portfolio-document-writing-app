
import styled from "styled-components";

const Container = styled.button`
all: unset;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
background-color: #777;
color: #fff;
border-radius: 20px;
`;



const SubmitButton = ():JSX.Element =>{
  return <Container type="submit">받아오기</Container>;
};

export default SubmitButton;