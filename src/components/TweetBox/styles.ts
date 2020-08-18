import styled from 'styled-components'

export const TweetWrapper = styled.div `
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  padding: 0.8rem 1.5rem;
`

export const ProfileBox = styled.div `
  height: 100%;
  img {
    border-radius: 2.5rem;
    width: 5rem;
  }

`

export const TweetContainer = styled.div `
  display: flex;
  font-size: 1.3rem;
  flex-direction: column;
  margin-left: .9rem;
  margin-top: .8rem;
  color: ${props => props.theme.colors.text};
  p {
    margin-bottom: 2rem;
    padding-top: .8rem;
  }
  h3 {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  span {
    margin-left: 1rem;
    color: ${props => props.theme.colors.textDark}
  }
  footer {
    opacity: 0.7;
    margin-left: -5.2rem;
    display: flex;
    justify-content: space-around;
    img {
      width: 1.7rem;
    }
  }
`