import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e53935;
  border-bottom: #f3f3f3;
  width: 100vw;
`;

export const CardUserInformationContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }

  h3 {
    margin: 1rem 0 0 1rem;
  }

  #user-email {
    font-style: italic;
    font-weight: 300;
    font-size: 16px;
  }
`;

export const SelectionMenu = styled.div`
  display: flex;
  align-self: center;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
  div {
    margin: 4rem;
    h3 {
      font-size: 20px;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  header {
    width: 100%;
    flex-direction: column;
    display: flex;
    margin-bottom: 3rem;
    align-items: center;

    h1 {
      margin-bottom: 0.5rem;
      color: #2b2b2b;
    }
  }
`;

export const ScrollView = styled.div`
  align-self: center;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 20rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e53935;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #e53935;
  }
`;
