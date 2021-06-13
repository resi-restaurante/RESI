import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
`;

export const DescriptionContainer = styled.header`
  h3 {
    color: #e53935;
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    color: #000;
  }
`;

export const ContainerCard = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
`;

export const FormContainer = styled(Form)`
  width: 56%;
  margin-top: 2rem;

  footer {
    width: 100%;
    margin-top: 2rem;
  }
`;
