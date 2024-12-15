import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(64px + var(--spacing-lg)) var(--spacing-md) var(--spacing-md);
  min-height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    padding: calc(64px + var(--spacing-md)) var(--spacing-md) var(--spacing-md);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xs);
    padding: calc(64px + var(--spacing-sm)) var(--spacing-sm) var(--spacing-sm);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: calc(64px + var(--spacing-sm)) var(--spacing-sm) var(--spacing-sm);
  }
`;

interface WrapType {
  children: ReactNode;
}

const Wrap = ({ children }: WrapType): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Wrap;
