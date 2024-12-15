import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90px;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  transition: var(--transition-fast);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: var(--primary);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    font-size: 1.125rem;
    font-weight: 600;
    padding: var(--spacing-sm);
    text-align: center;
    transition: var(--transition-fast);

    &:hover {
      color: var(--primary);
    }
  }

  @media (max-width: 1280px) {
    height: 85px;

    a {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    height: 80px;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    height: 70px;

    a {
      font-size: 0.95rem;
    }
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
