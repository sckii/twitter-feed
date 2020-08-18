import React from 'react';
import { BoxContainer } from './styles';
import TweetBox from '../TweetBox';

function FeedMain() {
  return (
    <BoxContainer>
      <TweetBox 
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="alsdkjfdsfgsdfgsdfgsdçlaskdjfçlaksdjfçlaksdjf"
      />
    </BoxContainer>
  )
}

export default FeedMain