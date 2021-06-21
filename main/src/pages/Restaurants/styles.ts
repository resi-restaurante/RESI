import styled from 'styled-components';
import { InputWithOutForm } from '../../components';

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  margin: 4rem 0 0 3rem;

  span {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    h4 {
      font-weight: 400;
      color: #e53935;
    }

    div {
      background-color: #e53935;
      width: 75%;
      height: 1px;
      margin-left: 2rem;
    }
  }
`;

export const City = styled.h1`
  color: #000;
  margin-bottom: 1rem;
`;

export const Input = styled(InputWithOutForm)``;
