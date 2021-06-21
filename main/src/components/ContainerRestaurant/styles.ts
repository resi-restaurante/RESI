import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
    p {
      display: none;
    }
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  flex-direction: column;
  width: 60%;
  height: 9.5rem;

  margin: 2rem 0 2rem 3rem;
  padding: 1rem;

  background: #fff;
  border-radius: 0.4rem;

  -webkit-box-shadow: 6px 9px 14px -1px rgba(107, 107, 107, 0.33);
  box-shadow: 6px 9px 14px -1px rgba(107, 107, 107, 0.33);
  img {
    width: 179px;
    height: 119px;

    border: 1px solid #000;
  }
  h2 {
    color: #e53935;
  }

  h1 {
    color: #e53935;
    opacity: 90%;
  }
  p {
    margin-right: 1rem;
    color: #6f6f6f;
  }

  &:hover {
    border: 2px solid #e53935;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 73%;
  height: 100%;
  margin-left: 1rem;

  footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2.5rem;

    p {
      text-decoration-line: underline;
      opacity: 80%;
      cursor: pointer;
    }
  }
`;

export const RestaurantTitleContainer = styled.div`
  align-self: left;

  h1 {
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
  }
`;

export const FoodPlate = styled.h2`
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: flex-end;
  }
  font-weight: bold;
  font-size: 24px;
`;
