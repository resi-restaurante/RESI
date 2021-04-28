import styled from 'styled-components';

export const Container = styled.div`
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

    background: #979797;

    border-radius: 1rem;
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 6rem;
    padding-left: 20rem;

    p {
      color: #575757;
      margin-right: 0.5rem;
      text-decoration: underline;
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
  .containerLogo {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #e53935;
    width: 16.8rem;
    height: 4rem;

    border-radius: 10px;
  }
  .inputsContainer {
    display: grid;
    grid: 5rem/ 1fr 1fr;
    gap: 1rem;
    padding-bottom: 2rem;
    margin-top: 5rem;
  }
`;
