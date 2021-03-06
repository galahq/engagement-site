import React from 'react'
import styled from 'styled-components'
import BaseCard from '../../components/card'

export default ({ title, description, videoSrc }) => (
  <VideoCard as="a">
    <VideoTitle>{title}</VideoTitle>
    <Description>{description}</Description>
    <Frame
      width="100%"
      height="250px"
      src={videoSrc}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media;"
      allowfullscreen
    ></Frame>
  </VideoCard>
)

const VideoCard = styled(BaseCard)`
  color: #192223;
  text-decoration: none;
  display: inline-block;
  margin: 0.4em;
`

const VideoTitle = styled.h3`
  font-size: 1em;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95em;
  line-height: 1.1;
  margin: 0.75em 0 1em;
`
const Frame = styled.iframe`
  border: 0;
`
