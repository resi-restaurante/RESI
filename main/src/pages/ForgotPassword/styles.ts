import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;
export const ContainerCard = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e53935;
  color: #000;
  .formCard {
    width: 24.6rem;
    height: 20rem;
    margin: 1rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #f0f0f0;
    border: 0;
    border-radius: 1rem;

    p {
      margin-bottom: 1rem;
    }
  }
  h2 {
    color: #000;
  }
  button {
    width: 5.8rem;
    height: 2rem;

    background: #e53935;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 4px;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    button {
      margin-bottom: 3.5rem;
      margin-left: 5rem;
    }

    a {
      margin-bottom: 4.5rem;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.1s;
      display: flex;
      flex-direction: row;
      &:hover {
        color: ${shade(0.1, '#fbfbfb')};
      }
    }
  }
  p {
    margin-top: 2rem;
  }
`;

export const RecoverPasswordText = styled.h6`
  color: #000;
  font-size: 16px;
`;
