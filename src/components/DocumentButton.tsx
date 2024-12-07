import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 18%;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #777777;
  border-radius: 20px;
  a{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
  }
`;

interface DocumentButtonType {
  link: string;
  name: string;
}

const DocumentButton = ({ link, name }: DocumentButtonType): JSX.Element => {
  return (
    <Container>
      <Link to={`${link}`}>{name}</Link>
    </Container>
  );
};

export default DocumentButton;
