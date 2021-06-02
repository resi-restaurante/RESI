import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem;
`;
export const ContentRestaurant = styled.div`
  width: 54.3rem;
  height: 45.5rem;
  background: #ffffff;
  border-radius: 2rem;
  box-shadow: 20px 20px 50px -30px #e53935;
  margin: 2rem;
  img {
    width: 20rem;
    height: 14rem;
    margin: 3.7rem;
    border-radius: 1rem;
  }
  h1 {
    position: absolute;
    left: 50rem;
    top: 10rem;

    color: #000;
  }
`;
export const Description = styled.p`
  margin-top: 5rem;
  position: absolute;
  width: 314px;
  height: 68px;
  left: 50rem;
  top: 168px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 16px;

  color: #000000;
`;
export const Price = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: Roboto, sans-serif;
  margin-right: 4rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 3rem;

  color: #e53935;
`;
export const Photos = styled.div`
  img {
    border-radius: 1rem;
    width: 12rem;
    height: 9rem;
  }
`;
