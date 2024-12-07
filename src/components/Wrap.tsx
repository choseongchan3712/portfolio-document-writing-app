import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
position: relative;
z-index: 0;
width: 100%;
padding: 90px 20px 20px 20px;
min-height: 100vh;
display: flex;
justify-content: space-between;
`;

interface WrapType {
  children: ReactNode;
}

const Wrap = ({ children }: WrapType): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrap;
