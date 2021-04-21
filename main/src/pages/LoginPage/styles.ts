import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;
export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-image: url('https://miro.medium.com/max/8000/1*2y73oaziSVYkYdH5Wbo1NA.jpeg');
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .Formlogin {
    width: 30rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #e53935;
    color: #fff;
    border-radius: 5px;
    box-shadow: 1px solid rgba(0, 0, 0.05, 0.05);
  }
`;
