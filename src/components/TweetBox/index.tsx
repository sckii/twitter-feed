import React from 'react';
import { ProfileBox, TweetContainer, TweetWrapper } from './styles';

import chatIcon from '../../assets/svg/chatbubble-outline.svg'
import heartIcon from '../../assets/svg/heart-outline.svg'
import repeatIcon from '../../assets/svg/repeat-outline.svg'
import shareIcon from '../../assets/svg/share-outline.svg'

function TweetBox() {
  return (
    <TweetWrapper>
      <ProfileBox>
        <img src="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg" alt=""/>
      </ProfileBox>
      <TweetContainer>
        <header><h3>Samuel<span>@samuel</span><span>-</span><span>2min</span></h3></header>
        <p>Muito obrigado Coração vermelho Nando e eu ficamos muito felizes com os fãs curtindo tanto a homenagem na dublagem aos queridos Monjardim e Drummond, nossos mestres, nesta animação nova do Scooby Doo. Fizemos com todo amor e carinho pra eles e pro público, saudoso pelas vozes</p>
        <footer>
          <img src={chatIcon} alt=""/><img src={heartIcon} alt=""/><img src={repeatIcon} alt=""/><img src={shareIcon} alt=""/>
        </footer>
      </TweetContainer>
    </TweetWrapper>
  )
}

export default TweetBox