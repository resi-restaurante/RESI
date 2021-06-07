import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  .swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  h1 {
    color: #434343;
    font-family: Ubuntu, sans-serif;
    margin-bottom: 5rem;
    margin-top: 5rem;
    text-align: center;
  }
  @media screen and (max-width: 720px) {
    #mulher {
      display: none;
    }
    h1 {
      font-size: 2rem;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
    .InitialPage {
    }
  }

  .InitialPage {
    margin-bottom: 19rem;
    width: 100%;
    max-width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6rem 0 0 10%;
    #image-container {
      position: absolute;
      right: 120px;
      bottom: 80px;
      z-index: -1;
    }
    img {
      width: 40vw;
      height: 70vh;
      margin-right: 5%;
    }
    h1 {
      font-family: Roboto, sans-serif;
      font-weight: 200;
      font-size: 3rem;
      color: #000;
    }
    h3 {
      margin-top: 1rem;
      color: #696969;
      font-weight: 200;
    }
    select {
      margin-left: 9rem;
    }
    select {
      position: absolute;
      width: 301px;
      height: 60px;
      left: 429px;
      top: 400px;
    }
    option {
      color: #888;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`;

export const InputContainer = styled.div`
  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    margin-bottom: 4rem;
    .get-start {
      display: none;
    }
  }
  height: 3rem;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  text-align: left;

  b {
    color: #e53935;
  }

  input {
    width: 100%;
    padding: 6px;
    border-radius: 5px;
    border: 1px #e53935;
  }
  .search-button {
    background: #e53935;
    margin-left: 0.3rem;
    padding: 0.5rem;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .get-start {
    background: #e53935;
    margin-left: 0.3rem;
    padding: 0.5rem;
    border-radius: 30px;
    width: 10rem;

    p {
      color: #fff;
    }
  }
`;

export const FormHelp = styled.div`
  @media screen and (max-width: 720px) {
  }
  /* display: grid;
  grid-template-rows: 1fr 2fr; */
  background-color: #f6f6f6;
  height: 70vh;
  padding: 30px;
  margin-top: 13%;

  h3 {
    color: #e53935;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    font-family: Ubuntu, sans-serif;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    margin-left: 10rem;
    padding: 3rem 8rem;

    p {
      display: flex;
      align-items: flex-end;
      text-align: center;
      font-size: 1rem;
      font-weight: 400;

      font-family: Roboto, sans-serif;
      color: #000;
    }
  }
`;
export const FormFuncionalites = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #434343;
  margin-bottom: 10rem;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: #fff;
    padding: 3rem 3.5rem;
    border-radius: 8px;
    max-height: 468px;
    margin-left: 2rem;
    box-shadow: 20px 20px 50px -30px #e53935;
  }
  &:first-child {
    margin-left: 0;
  }
  .icon {
    width: 3rem;
    height: 3rem;
  }
  img {
    width: 100%;
  }
  h3 {
    font-size: 100%;
    margin: 1.5rem 0;
    color: #000;
  }
  span {
    font-weight: 300;
    max-width: 240px;
    font-size: 80%;
    margin-bottom: 1rem;
  }
  button {
    padding: 1rem 2rem;
    text-transform: uppercase;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 80%;
    font-weight: 500;
    color: #fff;
    margin-bottom: 16px 0;
    background: linear-gradient(to right, #fe5f8f, #ffc7d9);
    &:hover {
      transition: all 0.2s ease-in-out;
      background: linear-gradient(to right, #e53935, #c53030);
      color: #f0f0f0;
    }
  }

  @media screen and (max-width: 720px) {
    margin-top: 10rem;
    margin-bottom: 12rem;
    flex-direction: column;
    .card {
      margin-left: 0;
      margin-bottom: 32px;
    }
    card:last-child {
      margin-bottom: 0;
    }
    button {
      font-size: 70%;
    }
  }
`;
