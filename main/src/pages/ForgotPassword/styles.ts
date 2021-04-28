import styled from 'styled-components';

export const Container = styled.div``;
export const ContainerCard = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

    margin-top: 6rem;
  }
  p {
    text-decoration: underline;
    margin-right: 1.5rem;
  }
`;
