import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f0;
`;
export const ContainerConfirmed = styled.div`
  width: 23rem;
  height: 32rem;
  margin: 2rem 30rem 3rem;
  padding: 3rem;
  background: #fff;
  border-radius: 1.3rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  text-align: center;
  h1 {
    color: #474747;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    padding-bottom: 0.4rem;
  }
  h2 {
    color: #474747;
  }
  p {
    font-weight: 700;
    color: #474747;
    margin-bottom: 1.2rem;
  }
  @media screen and (max-width: 720px) {
    text-align: center;
    font-size: 80%;
    width: 70%;
    height: 23rem;
    margin: 2rem;
    margin-right: 7rem;
    padding: 0;
  }
`;

export const Code = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin: 2rem;
  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;
