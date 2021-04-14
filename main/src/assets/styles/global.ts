import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  height: 100%;
  background:#000;
  color:#FFF;
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