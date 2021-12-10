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
  background: #e53935;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 10;
  max-width: auto;
`;
export const ContainerLabel = styled.div`
  @media screen and (max-width: 720px) {
    a {
      margin-left: 20rem;
    }
  }
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
  @media screen and (max-width: 720px) {
    width: 100%;
    font-size: 0.9rem;

    img {
      width: 5rem;
      height: 5rem;
      margin-left: 1rem;
    }
  }
  display: flex;
  align-items: center;
  img {
    width: 9rem;
    height: 9rem;
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
  color: #fff;
  transition: all 0.3s ease-in-out;
  transition: color 0.2s;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${shade(0.25, '#e53935')};
  }
`;

export const UserInformationContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s;
  margin-right: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 3rem;
    margin: 1rem;
  }
  svg {
    font-size: x-large;
    color: #fff;
  }

  h4 {
    margin: 0.1rem 0.4rem 0.1rem 0.4rem;
    color: #fff;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 720px) {
    margin-right: 8rem;
    h4 {
      font-size: 0.9rem;
    }
    img {
      width: 2.6rem;
      height: 2.6rem;
    }
    svg {
      display: none;
    }
  }
  &:hover {
    opacity: 0.25;
    cursor: pointer;
  }
`;
