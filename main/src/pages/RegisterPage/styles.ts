import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  @media screen and (max-width: 720px) {
    background: #f0f0f0;
    height: 80%;
    button {
      margin-right: 3rem;
    }
    .inputsContainer {
      width: 80%;
    }
    footer {
      p {
        margin-left: 3rem;
      }
    }
  }
  background: #e53935;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalRegister {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 42rem;
    height: 40rem;

    margin: 3rem;
    padding: 1rem;

    background: #f0f0f0;

    border-radius: 1rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #575757;
      margin-left: 0.5rem;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.1s;
      display: flex;
      flex-direction: row;
      &:hover {
        color: ${shade(0.1, '#fbfbfb')};
      }
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
  }

  .inputsContainer {
    display: grid;
    grid: 5rem/ 1fr 1fr;
    gap: 1rem;
    padding-bottom: 2rem;
    margin-top: 5rem;

    #switcher-container {
      display: flex;
      align-items: center;
      flex-direction: row;

      p {
        color: #575757;
        margin-left: 1rem;
      }
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #e53935;
  width: 16.8rem;
  height: 4rem;

  border-radius: 10px;
`;
