import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
position: relative;
z-index: 0;
width: 100%;
padding-top: 70px;
min-height: 100vh;
background-color: #7e7e7e;
color: #fff;
`;

interface WrapType {
  children: ReactNode;
}

const Wrap = ({ children }: WrapType): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrap;
