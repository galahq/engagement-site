import React from 'react'
import styled from 'styled-components'
import BaseCard from '../../components/card'

export default ({ imageSrc, title, description, audioSrc }) => (
  <AudioCard as="a">
    <Image src={imageSrc} />
    <AudioTitle>{title}</AudioTitle>
    <Description>{description}</Description>
    <Player controls src={audioSrc}></Player>
  </AudioCard>
)

const AudioCard = styled(BaseCard)`
  color: #192223;
  text-decoration: none;
  display: block;
  margin: 0.4em;
`

const Image = styled.img`
  padding-bottom: 0.5em;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const AudioTitle = styled.h3`
  font-size: 1em;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95em;
  line-height: 1.1;
  margin: 0.25em 0 0;
`
const Player = styled.audio`
  width: 100%;
`
