import React from 'react'
import styled from 'styled-components'
import BaseButton from './button'
import { Link } from 'gatsby'

export default ({ kicker, title, imageSrc, href }) => (
  <TopicCard to={href}>
    <Image src={imageSrc} />
    <TextBlock>
      <Kicker>{kicker}</Kicker>
      <Description>{title}</Description>
      <RightAlignedText>
        <InlineButton>See more</InlineButton>
      </RightAlignedText>
    </TextBlock>
  </TopicCard>
)

const TopicCard = styled(Link)`
  color: #192223;
  text-decoration: none;
  display: flex;
  background: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(25, 34, 35, 0.09);
  padding: 1rem;
`
const TextBlock = styled.div`
  padding: 1rem;
  width: 70%;
`
const RightAlignedText = styled.div`
  text-align: right;
`

const InlineButton = styled(BaseButton)`
  display: inline-block;
`

const Image = styled.img`
  width: 30%;
  padding-right: 0.5em;
`

const Kicker = styled.h3`
  font-size: 1em;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 0.95em;
  line-height: 1.1;
  margin: 0.25em 0 1em;
`
