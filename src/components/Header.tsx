import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: var(--bg-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    height: 100%;
    width: calc(100% / 4);
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      background-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--text-primary);
      font-weight: 500;
      font-size: 1rem;
      position: relative;
      transition: var(--transition-fast);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--primary);
        transform: scaleX(0);
        transition: transform var(--transition-fast);
      }

      &:hover, &.active {
        color: var(--primary);
        background-color: var(--bg-secondary);

        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  @media (max-width: 1280px) {
    height: 60px;

    div a {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    height: 56px;

    div a {
      font-size: 0.9rem;
      padding: 0 var(--spacing-sm);
    }
  }

  @media (max-width: 480px) {
    height: 52px;

    div a {
      font-size: 0.85rem;
      padding: 0 var(--spacing-xs);
    }
  }
`;

const Header = ():JSX.Element => {
  return <Container>
    <div><Link to={"/bond"}>채권 채무</Link></div>
    <div><Link to={"/civil"}>민사소송</Link></div>
    <div><Link to={"/criminal"}>형사소송</Link></div>
    <div><Link to={"/administrative"}>행정소송</Link></div>
  </Container>;
};

export default Header;