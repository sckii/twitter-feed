import React from 'react';
import { BoxContainer } from './styles';
import TweetBox from '../TweetBox';

function FeedMain() {
  return (
    <BoxContainer>
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted=""
        imageTweeted=""
      />
      
    </BoxContainer>
  )
}

export default FeedMain