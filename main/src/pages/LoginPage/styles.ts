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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .Formlogin {
    width: 30rem;
    height: 100vh;

    display: flex;
    justify-content: flex-safe;
    align-items: center;
    flex-direction: column;

    background-color: #e53935;
    color: #fff;
    box-shadow: 1px solid rgba(0, 0, 0.05, 0.05);

    header {
      margin: 1.5rem;
    }

    main {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      .forgetPassaword {
        font-size: 1rem;
        text-decoration: underline;
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
      padding: 7rem;
      text-decoration: underline;
    }
  }
`;
