import React, { useState } from 'react';
import { ProfileBox, TweetContainer, TweetWrapper, FooterBox, MainContent } from './styles';

import chatIcon from '../../assets/svg/chatbubble-outline.svg'
import heartIcon from '../../assets/svg/heart-outline.svg'
import repeatIcon from '../../assets/svg/repeat-outline.svg'
import shareIcon from '../../assets/svg/share-outline.svg'

interface Props {
  name:  string;
  tag: string;
  date: string;
  tweeted?: string;
  imageTweeted?: string;
  profileImage: string;
  videoTweeted?: string;
}

const TweetBox: React.FC<Props> = ({ videoTweeted, imageTweeted, profileImage, name, tag, date, tweeted }) => {
  return (
    <TweetWrapper>
      <TweetContainer>
        <ProfileBox>
          <img src={profileImage} alt=""/>
        </ProfileBox>
        <MainContent>
          <header><h3>{ name }<span>{ tag }</span><span>-</span><span>{ date }</span></h3></header>
          <p>{ tweeted }</p><img src={ imageTweeted } alt=""/>
          { videoTweeted === '' ? <video width="320" height="240" controls>
            <source src={videoTweeted} type="video/mp4" />
          </video> : <></>}
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