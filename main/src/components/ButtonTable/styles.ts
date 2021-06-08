import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 2.5rem;
  background: #fff;
  border: 1px solid #e53935;
  box-shadow: 0 0 3px #e53935;
  box-sizing: border-box;
  border-radius: 9px;
  &:hover {
    outline: none;
    border: 1px solid #e53935;
    box-shadow: 0 0 10px 2px #c53030;
  }
  button {
    background: #fff;
    font-size: 2rem;
    font-weight: 700;
    color: #e53935;
  }
`;
