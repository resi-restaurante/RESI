import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  flex-direction: row;
  width: 54.3rem;
  height: 9.5rem;

  margin: 4rem;
  padding: 1rem;

  background: #fff;
  border-radius: 10px;

  border: 2px solid #cccccc;
  img {
    width: 179px;
    height: 119px;

    border: 1px solid #000;
  }
  h2 {
    color: #e53935;
  }
  p,
  h1 {
    color: #6f6f6f;
  }
  p {
    text-decoration-line: underline;
    margin-top: 4.5rem;
    margin-right: 1rem;
  }
`;
export const RestaurantTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  align-items: baseline;
  margin: 2rem;
`;
export const FoodPlate = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 5.5rem;
`;
