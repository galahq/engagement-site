import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Container, { TextContainer } from '../components/container'
import Topic from '../components/topic'
import dioxane from '../assets/dioxane.jpg'

const IndexPage = () => (
  <div>
    <TextContainer>
      <p>
        Our work connecting research, learning, and practice leads us to create
        and discover a wide range of multimedia resources. While you can often discover this content embeded within{' '}
        <Link href="http://learngala.com">cases in our catalog</Link>, we
        also compile and present some of these resources here, to help nform active
        public discussion and problem-solving.
      </p>
      <h2 id="Topics">Topics</h2>
    </TextContainer>

    <TopicsContainer>
      <Topic
        kicker="Dioxane Plume Pollution"
        title="Who should deal with the groundwater contamination in a university town?"
        imageSrc={dioxane}
        href="./dioxane"
      />
    </TopicsContainer>
  </div>
)

export default IndexPage

const TopicsContainer = Container.extend`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1 fr;
  margin-bottom: 3rem;
  margin-top: 2rem;
  max-width: 700px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
