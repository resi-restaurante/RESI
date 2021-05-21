import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  .InitialPage {
    margin-bottom: 19rem;
    h1 {
      position: absolute;
      width: 298px;
      height: 126px;
      left: 452px;
      top: 110px;

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
export const FormHelp = styled.div`
  /* display: grid;
  grid-template-rows: 1fr 2fr; */

  margin-top: 5rem;
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
