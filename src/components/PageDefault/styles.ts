import styled from 'styled-components'

export const PageContainer = styled.div `
  width: 100vw;
  height: 100vh;
  max-width: 550px;
  border: 1px solid ${props => props.theme.colors.border}
`