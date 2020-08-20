import React from 'react';
import TweetBox from '../TweetBox';
import FeedHeader from '../FeedHeader'

function FeedMain() {
  const videoUrl = 'http://localhost:3000/sea.mp4'
  return (
    <>
      <FeedHeader />
      
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="Série que nunca acaba"
        imageTweeted="https://pbs.twimg.com/media/EfyKTTlXgAAJvcm?format=jpg&name=900x900"
        videoTweeted=""
      />
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="Video bonito"
        imageTweeted=""
        videoTweeted=""
      />
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="Video bonito"
        imageTweeted=""
        videoTweeted=""
      />
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="bonito o dia"
        imageTweeted=""
        videoTweeted={videoUrl}
      />
      <TweetBox 
        profileImage="https://pbs.twimg.com/profile_images/1295775384475246592/_uFAV8Ks_400x400.jpg"
        name="samuel"
        tag="samuel"
        date="2 min"
        tweeted="bonito o dia"
        imageTweeted=""
        videoTweeted=""
      />
    </>
  )
}

export default FeedMain