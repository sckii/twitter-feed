import styled from 'styled-components'

export const TweetWrapper = styled.div `
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  
  
`

export const ProfileBox = styled.div `
  padding-right: 1rem;
  height: 100%;
  img {
    border-radius: 2.5rem;
    width: 5rem;
  }

`

export const TweetContainer = styled.div `
  display: flex;
  font-size: 1.4rem;
  flex-direction: row;
  margin-left: .9rem;
  margin-top: .8rem;
  color: ${props => props.theme.colors.text};
  
  h3 {
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
  span {
    margin-left: 1rem;
    color: ${props => props.theme.colors.textDark}
  }
  
`

export const FooterBox = styled.footer `
  margin-left: 6.6rem;
  footer {
    opacity: 0.7;
    margin-left: -5.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 1.7rem;
    }
  }
`

export const MainContent = styled.main `
  p {
    margin-bottom: 2rem;
    padding-top: .8rem;
  }
`