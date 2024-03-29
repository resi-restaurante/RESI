import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body{
    min-height: 100vh;
    min-width: 100vw;
    background: #f0f0f0;
    color: #FFF;
    overflow-x: hidden;
    font-family: Roboto,sans-serif;

  }

  h1,h2,h3,h4,h5,h6{
    color: #fefefe;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
