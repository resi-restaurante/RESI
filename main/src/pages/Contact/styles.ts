import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    background-color: #fff;
    height: 33rem;
    width: 67rem;
    margin-top: 2rem;
    border-radius: 5%;

    .input-container {
      padding: 2rem;
      div + div {
        margin-top: 2rem;
      }
      .input-title {
        color: #000;
      }
    }
  }
`;

export const Title = styled.p`
  @media screen and (max-width: 720px) {
    font-size: 1rem;
  }
  color: #000;
  text-align: center;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 24px;
`;
