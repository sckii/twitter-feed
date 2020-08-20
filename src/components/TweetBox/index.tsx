import React, { useState } from 'react';
import { ProfileBox, TweetContainer, TweetWrapper, FooterBox, MainContent, Video, OpenVideo, OpenImage } from './styles';

import chatIcon from '../../assets/svg/chatbubble-outline.svg'
import heartIcon from '../../assets/svg/heart-outline.svg'
import repeatIcon from '../../assets/svg/repeat-outline.svg'
import shareIcon from '../../assets/svg/share-outline.svg'
import closeIcon from '../../assets/svg/close-circle-outline.svg'
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
  const [imageOpen, setImageOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)


  function handleImageOpen() {
    setImageOpen(!imageOpen)
  }
  function handleVideoOpen() {
    setVideoOpen(!videoOpen)
  }

  return (
    <TweetWrapper>
      <TweetContainer>
        <ProfileBox>
          <img src={profileImage} alt=""/>
        </ProfileBox>
        <MainContent>
          <header><h3>{ name }<span>{ tag }</span><span>-</span><span>{ date }</span></h3></header>
          { tweeted !== '' ? <p>{ tweeted }</p> : <></>}
          { imageTweeted !== '' ? <img onClick={handleImageOpen} src={ imageTweeted } alt="" /> : <></>}
          { imageOpen === true ? 
            <OpenImage onClick={handleImageOpen}>  
              <span><img src={closeIcon} alt=""/></span>
              <img onClick={handleImageOpen} src={ imageTweeted } alt="" /> 
              <footer>
                <img src={chatIcon} alt=""/><img src={heartIcon} alt=""/><img src={repeatIcon} alt=""/><img src={shareIcon} alt=""/>
              </footer>
            </OpenImage>    
            : <> </>}
          { videoTweeted !== '' ? 
              <video onClick={handleVideoOpen} src={videoTweeted} controls>
              </video>
          : <></>}
          { videoOpen === true ? 
            <OpenVideo onClick={handleVideoOpen}>  
              <span><img src={closeIcon} alt=""/></span>
              <video onClick={handleVideoOpen} src={videoTweeted} controls>
              </video>
              <footer>
                <img src={chatIcon} alt=""/><img src={heartIcon} alt=""/><img src={repeatIcon} alt=""/><img src={shareIcon} alt=""/>
              </footer>
            </OpenVideo>    
            : <> </>}
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