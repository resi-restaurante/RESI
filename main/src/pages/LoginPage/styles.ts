import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerLogin = styled.div`
  @media screen and (max-width: 720px) {
    display: block;
    .FormLogin {
      width: 100%;
    }
  }
  margin-top: 5rem;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .Formlogin {
    width: 30rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: #000;

    main {
      display: flex;
      justify-content: flex-end;
      width: 75%;

      #forgetPassaword {
        margin-bottom: 2rem;

        p {
          color: #000;
          font-size: 0.9rem;
          font-weight: normal;
        }
      }
    }
    button {
      width: 75%;
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

export const AdviseContainer = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }

  width: 55%;
  height: 300%;
  margin: 0 0 13% 2%;

  h3 {
    color: #000;
    font-size: 3rem;
  }

  div {
    margin-top: 1rem;
    display: flex;
    p {
      color: #000;
    }

    #register-link {
      color: #e53935;
      margin-left: 0.2rem;
    }
  }
`;

export const InputFormContainer = styled.section`
  width: 80%;
  text-align: left;
  p {
    margin-bottom: 0.2rem;
  }

  > p {
    margin-top: 2rem;
  }
`;
