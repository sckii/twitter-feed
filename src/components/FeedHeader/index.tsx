import React, { useState } from 'react'
import { Header, HeaderContainer, TextContainer, ProfileContainer, TextArea, ButtonsContainer } from './styles'

function FeedRow() {
  const [text, setText] = useState('')
  const [value, setValue] = useState(true)


  function handlePost() {
  }
  function handleInput() {
    if (text === '') {
      return console.log('error')
    }
      console.log(text)
  }
  return (
    <HeaderContainer>
      <Header>
        Página Inicial
      </Header>
      <form onSubmit={handleInput} >
      <TextContainer>
        <ProfileContainer>
          <img src="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg" alt=""/>
        </ProfileContainer>
          <TextArea  
            placeholder="O que esta acontecendo?"
            value={text}
            onChange={(e) => { setText(e.target.value) } }
          />
      </TextContainer>
      <ButtonsContainer>
        {value === true ? 
          <button onClick={handlePost} type="submit" >Tweetar</button> :
          <button onClick={handlePost} type="submit" disabled>Tweetar</button>
        }
      </ButtonsContainer>
      </form>  
    </HeaderContainer>
  )
}

export default FeedRow