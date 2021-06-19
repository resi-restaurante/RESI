import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #e53935;
  margin-top: 7rem;
`;

export const ContentTop = styled.div`
  margin-bottom: 3rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-right: 2rem;
`;
export const Links = styled.a`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-decoration: none;

  font-weight: 300;
  color: #ffffff;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    color: #fe5f8f;
    padding-left: 0.5rem;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #fff;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const Description = styled.p`
  text-align: center;
  margin-top: 3.2rem;
  font-weight: 400;
`;
