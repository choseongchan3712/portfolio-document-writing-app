import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
position: fixed;
z-index: 990;
top: 0;
left: 0;
width: 100vw;
height: 70px;
display: flex;
align-items: center;
justify-content: space-between;
div {
  height: 100%;
  width: calc(100% / 5);
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    background-color: #444444;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    border-right:1px solid rgba(255, 255, 255, 0.3) ;
    &:hover {
      background-color: #555555;
    }
  }
}
`;

const Header = ():JSX.Element =>{
  return <Container>
    <div><Link to={"/report"}>보고서</Link></div>
    <div><Link to={"/bond"}>채권 채무</Link></div>
    <div><Link to={"/civil"}>민사소송</Link></div>
    <div><Link to={"/criminal"}>형사소송</Link></div>
    <div><Link to={"/administrative"}>행정소송</Link></div>
  </Container>;
};

export default Header;