import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: #e53935;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 10;

  img {
    margin-top: 0.5rem;
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
    font-weight: 500;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #c53030;
    }
  }
  button {
    margin-top: 1rem;
  }
`;
export const ButtonLogin = styled.button`
  border-radius: 4rem;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;

  white-space: nowrap;
  padding: 1rem 1.5rem;
  font-size: 1rem;

  background: #c53030;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ff6865;
    color: #fff;
  }
`;
