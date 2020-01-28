import React from 'react'
import styled from 'styled-components'

import BaseButton from './button'
import BaseCard from './card'

export default ({ kicker, title, imageSrc, href }) => (
  <Card href={href}>
    <Image src={imageSrc} />
    <TextBlock>
      <Kicker>{kicker}</Kicker>
      <Description>{title}</Description>
      <RightAlignedText>
        <Button>See more</Button>
      </RightAlignedText>
    </TextBlock>
  </Card>
)

const Card = BaseCard.withComponent('a').extend`
  color: #192223;
  text-decoration: none;
  display: flex;
`
const TextBlock = styled.div`
  padding: 1rem;
  width: 70%;
`
const RightAlignedText = styled.div`
  text-align: right;
`

const Button = BaseButton.withComponent('span').extend`
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
