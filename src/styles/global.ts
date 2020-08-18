import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  :root {
    font-size: 60%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  html, body, #root {
    height: 100vh;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  body {
    font-family: 'Archivo', sans-serif;
    background: ${props => props.theme.colors.primary}
  }
`