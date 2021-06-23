import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: 8rem;
    max-width: 20rem;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 85%;
  height: 5rem;
  margin: 0.2rem 0 2rem 3rem;
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
`;

export const ContentContainer = styled.div`
  @media screen and (max-width: 720px) {
    margin-left: 0.5rem;
  }
  width: 73%;
  height: 100%;
  margin-left: 1rem;
`;

export const RestaurantTitleContainer = styled.div`
  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.6rem;
  h1 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    @media screen and (max-width: 720px) {
      margin-left: 0;
    }
    margin-left: 1rem;
  }
`;

export const IconMenu = styled.div`
  display: flex;
  margin-left: 3%;
  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin: 2%;
  }

  svg {
    color: #e53935;
    margin-left: 1rem;
    cursor: pointer;
    transition: color 2s;
    &:hover {
      color: ${shade(0.7, '#e53935')};
    }
  }

  svg + svg {
    @media screen and (max-width: 720px) {
      margin-top: 1rem;
    }
  }
`;
