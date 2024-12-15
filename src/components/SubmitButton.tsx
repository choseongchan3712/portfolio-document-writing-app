import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition-fast);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--secondary);
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: var(--gray-300);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 1280px) {
    height: 46px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    height: 44px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    height: 40px;
    font-size: 0.85rem;
  }
`;

const SubmitButton = ():JSX.Element =>{
  return <Container type="submit">받아오기</Container>;
};

export default SubmitButton;