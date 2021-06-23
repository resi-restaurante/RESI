import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div`
  @media screen and (max-width: 720px) {
    #estab {
      display: hidden;
    }
    p {
      display: none;
    }
  }
  height: 60px;
  padding: 0 30px;
  width: 100%;
  color: #fff;
  background: transparent;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 10;
  max-width: auto;

  img {
    margin-top: 0.5rem;
  }
`;
export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  a {
    margin-left: 10vh;
  }
  p {
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: #fff;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #c53030;
    }
  }
`;
export const Nav = styled.div`
  margin-top: -80;
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  padding: 0 24px;
  width: 100%;
  max-width: 1100px;
  p {
    margin-top: 2rem;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #c53030;
    }
  }
  button {
    margin-top: 1rem;
  }
`;
export const NavigationButton = styled(Link)`
  display: flex;
  align-items: center;

  img {
    width: 7rem;
    height: 7rem;
  }

  svg {
    margin-right: 0.3rem;
  }
`;

export const ButtonLogin = styled.button`
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;

  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 1rem;
  background: transparent;
  color: #e53935;
  transition: all 0.3s ease-in-out;
  transition: color 0.2s;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${shade(0.25, '#e53935')};
  }
`;

export const UserInformationContainer = styled(Link)`
  display: flex;
  transition: opacity 0.5s;
  margin-right: 1rem;
  svg {
    margin-right: 0.5rem;
    color: #000;
  }

  h4 {
    font-size: 16px;
    color: #000;
  }

  #userName {
    margin: 0 0.2rem 0 0.2rem;
    color: #000;
  }

  &:hover {
    opacity: 0.25;
    cursor: pointer;
  }
`;
