import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  .InitialPage {
    margin-bottom: 19rem;
    width: 100%;
    max-width: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 5rem;
    image {
      width: 100vw;
      height: 100vh;
    }
    h1 {
      margin-left: 5rem;
      font-family: Roboto, sans-serif;
      font-weight: 200;
      font-size: 3rem;
      line-height: 5rem;
      color: #000;
    }
    h1,
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
  height: 3rem;
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  input {
    width: 70%;
    padding: 6px;
    border-radius: 5px;
  }
  button {
    background: #e53935;
    margin-left: 0.3rem;
    padding: 0.5rem;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

export const FormHelp = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 2fr; */
  background-color: #f6f6f6;
  height: 70vh;
  padding: 30px;
  h1 {
    margin-left: 3rem;
    color: #000;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1rem;
    margin-left: 10rem;
    padding: 3rem 8rem;

    img {
      align-items: center;
      grid-row-start: 1;
      grid-row-end: 3;
    }
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
