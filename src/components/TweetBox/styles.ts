import styled from 'styled-components'

export const TweetWrapper = styled.div `
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  border-left: 1px solid ${props => props.theme.colors.border};
  border-right: 1px solid ${props => props.theme.colors.border};
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
      border-radius: 2rem;
      width: 1.7rem;
    }
  }
`

export const MainContent = styled.main `
  padding-right: 1.1rem;
  margin-bottom: 1rem;
  p {
    margin-bottom: 2rem;
    padding-top: .8rem;
  }
  img {
    width: 100%;
    border-radius: 2rem;
    border: 1px solid ${props => props.theme.colors.border}
  }
  embed {
    width: 30rem;
    max-width: 800px;
  }
  video {
    width: 100%;
    border-radius: 2rem;
    outline: none;
    border: 1px solid ${props => props.theme.colors.border}
  }
`
export const OpenVideo = styled.div `

  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${props => props.theme.colors.overlay};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  video {
    border: 0;
    width: 100%;
    border-radius: 0;
    max-width: 1080px;

  }
  span {
    width: 98%;
    position: relative;
    img {
      border-radius: 4rem;
      width: 3rem;

    }
    img:hover {
      opacity: 0.8;
      background: ${props => props.theme.colors.primary}; 
    }
  }
  footer {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    max-width: 1080px;
    
    img {
      border-radius: 2rem;
      width: 2rem;
    }
  }
  img {
    max-width: 1080px;
    border: 0;
    opacity: 1;
    border-radius: 0;
  }
`
export const OpenImage = styled.div `

  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${props => props.theme.colors.overlay};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  video {
    border: 0;
    width: 100%;
    border-radius: 0;
    max-width: 1080px;

  }
  span {
    width: 98%;
    position: relative;
    img {
      border-radius: 4rem;
      width: 3rem;

    }
    img:hover {
      opacity: 0.8;
      background: ${props => props.theme.colors.primary}; 
    }
  }
  footer {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    max-width: 1080px;
    
    img {
      border-radius: 2rem;
      width: 2rem;
    }
  }
  img {
    max-width: 1080px;
    border: 0;
    opacity: 1;
    border-radius: 0;
  }
`

export const Video = styled.video `

`

