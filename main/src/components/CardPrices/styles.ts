import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 3rem;
  justify-content: center;
`;
export const SectionTitle = styled.section`
  margin: 3rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  h2 {
    font-family: Ubuntu, sans-serif;
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    justify-self: end;
    text-align: center;
    color: #fff;
  }
  @media screen and (max-width: 720px) {
    margin: 1rem;
    p {
      text-align: center;
    }
    h2 {
      font-size: 2.5rem;
    }
  }
`;
export const Options = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  position: relative;
`;
export const Plan = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
  background: linear-gradient(180deg, #e53935, #c53030);
  /* box-shadow: 20px 20px 50px -30px #c53030; */
  box-shadow: 2px 0 13px 2px hsl(0deg 0% 100% / 30%);
  padding: 2rem;
  border-radius: 0.9rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  ::before {
    width: 83%;
    height: 100%;
    position: absolute;
    right: -1rem;
    top: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: -1;
    opacity: 5;
  }
  button {
    padding: 1rem 2rem;
    text-transform: uppercase;
    border-radius: 2rem;
    border: 0;
    cursor: pointer;
    font-size: 80%;
    font-weight: 500;
    color: #000;
    margin-bottom: 16px 0;
    background: #f0f0f0;
    &:hover {
      transition: all 0.4s ease-in-out;
      background: linear-gradient(to right, #fe5f8f, #ffc7d9);
      color: #f0f0f0;
    }
  }
  @media screen and (max-width: 720px) {
    margin-left: 5rem;
    margin-right: 5rem;
    padding: 3rem;
  }
`;
export const Subscription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 62px;
  p {
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
export const Benefits = styled.ul`
  display: grid;
  grid-gap: 2rem;
  li {
    list-style-type: none;
    font-size: 0.9rem;
  }
`;
