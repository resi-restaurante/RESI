import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e53935;
  height: 100%;
`;

export const CardUserInformationContainer = styled.header`
  display: flex;
  width: 80%;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  h3 {
    margin: 1rem 0 0 1rem;
  }
`;
