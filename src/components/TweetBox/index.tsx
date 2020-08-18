import React from 'react';
import { ProfileBox, TweetContainer, TweetWrapper, FooterBox, MainContent } from './styles';

import chatIcon from '../../assets/svg/chatbubble-outline.svg'
import heartIcon from '../../assets/svg/heart-outline.svg'
import repeatIcon from '../../assets/svg/repeat-outline.svg'
import shareIcon from '../../assets/svg/share-outline.svg'

interface Props {
  name:  string;
  tag: string;
  date: string;
  tweeted: string
}

const TweetBox: React.FC<Props> = ({ name, tag, date, tweeted }) => {
  return (
    <TweetWrapper>
      <TweetContainer>
        <ProfileBox>
          <img src="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg" alt=""/>
        </ProfileBox>
        <MainContent>
          <header><h3>{ name }<span>{ tag }</span><span>-</span><span>{ date }</span></h3></header>
          <p>{ tweeted }</p>
        </MainContent>
      </TweetContainer>
      <FooterBox>
        <footer>
          <img src={chatIcon} alt=""/><img src={heartIcon} alt=""/><img src={repeatIcon} alt=""/><img src={shareIcon} alt=""/>
        </footer>
      </FooterBox>
    </TweetWrapper>
  )
}

export default TweetBox