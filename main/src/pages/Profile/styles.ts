import styled from 'styled-components';

interface ConteinerBottomBorder {
  onPressContent: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPage = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* display: flex;
  flex-direction: column; */

  align-items: start;
  margin-left: 0.7rem;
  background-color: #f3f3f3;
  border-bottom: #e53935;
`;

export const CardUserInformationContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 7rem;
  text-align: center;

  background: #e53935;
  border-radius: 2rem;
  box-shadow: 20px 20px 50px -30px #e53935;

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
export const SectionButton = styled.section`
  button {
    width: 50%;
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

export const ContentContainer = styled.div<ConteinerBottomBorder>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => (props.onPressContent ? '3px solid #fff' : '')};
  h3 {
    color: #e53935;
  }
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
