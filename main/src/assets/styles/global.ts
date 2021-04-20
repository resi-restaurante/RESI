import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border:0;
  box-sizing: border-box;
}

body{
  min-height: 100vh;
    min-width: 100vw;
  background:#000;
  color:#FFF;
  overflow-x: hidden;
  font-family: Roboto,sans-serif;
  
}
h1{
  color:#FFF;
}
a {
  color: inherit;
  text-decoration: none;
}
`