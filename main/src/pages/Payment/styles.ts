import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;
  margin-top: 7rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  border-radius: 10px;
  height: 20rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${shade(0.1, '#fff')};
    height: 100%;
    width: 10rem;
    transition: opacity 1s;

    button {
      border: 0;
      background-color: transparent;
    }

    h1 {
      font-size: 20px;
      margin-top: 0.5rem;
      color: #e53935;
    }

    svg {
      color: #e53935;
    }

    &:hover {
      opacity: 0.25;
    }
  }
`;

export const CreditCardContainer = styled.div`
  display: flex;

  .rccs__card--unknown > div {
    background: #75c9a5;
  }
`;
