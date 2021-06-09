import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
`;
export const ContainerLogin = styled.div`
  @media screen and (max-width: 720px) {
    background-image: none;
    display: block;
    .FormLogin {
      width: 100%;
    }
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-image: url('https://miro.medium.com/max/8000/1*2y73oaziSVYkYdH5Wbo1NA.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-top: 2rem;
  }

  .Formlogin {
    width: 30rem;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #e53935;
    color: #fff;
    box-shadow: 1px solid rgba(0, 0, 0.05, 0.05);

    .inputForm {
      width: 80%;
      text-align: left;
      margin: 10px;
      p {
        margin-bottom: 0.2rem;
      }

      > p {
        margin-top: 2rem;
      }
    }

    main {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      #forgetPassaword {
        margin-bottom: 1rem;
      }

      button {
        width: 5.8rem;
        height: 2rem;
        margin-left: 2.5rem;
        background: #ff6865;
        color: #fff;
        border-radius: 4px;
      }
    }
    footer {
      display: flex;
      flex-direction: row;
      padding: 5rem;
      align-items: center;
    }
    a {
      color: #fff;
      margin-top: 24px;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.2s;
      display: flex;
      flex-direction: row;
      &:hover {
        color: ${shade(0.2, '#fbfbfb')};
      }
      svg {
        margin-left: 0.2rem;
      }
    }
  }
`;
