import styled from 'styled-components';
import { shade } from 'polished';
import { Form } from '@unform/web';

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
  margin-right: 5rem;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const AdviseContainer = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }

  width: 100%;
  margin: 0 0 13% 10%;

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

export const FormContainer = styled(Form)`
  max-width: 80vw;
  margin: 2rem 0 4rem 4rem;
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
    width: 100%;
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
`;

export const InputFormContainer = styled.section`
  width: 30rem;
  text-align: left;

  p {
    margin-bottom: 0.2rem;
  }

  > p {
    margin-top: 2rem;
  }
`;

export const FormRow = styled.div`
  display: flex;

  width: 32rem;
  margin-bottom: 0.5rem;
  div + div {
    margin-left: 1rem;
  }
`;
