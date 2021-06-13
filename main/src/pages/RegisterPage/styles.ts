import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100%;
`;

export const DescriptionContainer = styled.header`
  margin: 2rem 2rem;
  h3 {
    color: #e53935;
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    color: #000;
  }
`;

export const FormContainer = styled(Form)`
  width: 50%;
  margin-left: 2rem;
`;

export const FormRow = styled.div``;
