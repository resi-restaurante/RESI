import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RestaurantGrid = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  margin-top: 1rem;
  img {
    @media screen and (max-width: 720px) {
      width: 15rem;
      height: 10rem;
      margin: 0 auto;
    }
    width: 20rem;
    height: 14rem;
    margin: 3.7rem;
    border-radius: 1rem;
  }

  button {
    align-self: center;
    margin: 1rem;
    width: 90%;
  }
`;

export const ContentRestaurant = styled.div`
  @media screen and (max-width: 720px) {
    margin: 1rem;
  }
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  div {
    margin-top: 4rem;
  }
`;

export const Title = styled.h1`
  color: #000;
`;

export const Adress = styled.h4`
  display: flex;
  color: #e53935;
  p {
    font-style: italic;
    font-size: 16px;
    font-weight: 300;
  }

  svg {
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 16px;
  width: 90%;
  color: #000000;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;

  align-items: center;
  width: 60%;

  margin-bottom: 2rem;
  cursor: pointer;
  color: #b11f2b;

  flex-wrap: wrap;

  @media screen and (max-width: 720px) {
    justify-content: center;
  }

  p {
    margin-top: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
  }
`;
