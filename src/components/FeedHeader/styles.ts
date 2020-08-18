import styled from 'styled-components'

export const HeaderContainer = styled.div `
  width: 100%;
  height: 17.2rem;
  border-bottom: 1rem solid ${props => props.theme.colors.border};
`

export const Header = styled.div `
  padding: 1.5rem 1.5rem;
  font-size: 1.8rem;
  color: white;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`

export const TextContainer = styled.div `
  display: flex;
`

export const ProfileContainer = styled.div `
  padding: 0.8rem 1.5rem;
  img {
    cursor: pointer;
    border-radius: 2.5rem;
    width: 5rem;
  }
`

export const TextArea = styled.textarea `
  color: ${props => props.theme.colors.text};
  background: none;
  margin-top: 2rem;
  outline: none;
  border: 0;
  width: 100%;
  resize: none;
  font-size: 2.4rem;
  height: auto;
  &::-webkit-scrollbar {
    width: 0
  }
`

export const ButtonsContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.8rem;
  button {
    font-weight: 700;
    opacity: 0.7;
    background: ${props => props.theme.colors.secondary};
    border: 0;
    color: white;
    outline: none;
    border-radius: 2rem;  
    padding: 1rem 1.5rem;
  }
  button:hover { 
    opacity: 1;
  }
`