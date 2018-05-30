import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Case from '../components/case'
import Container, { TextContainer } from '../components/container'

import dam from '../assets/dam.jpg'
import dioxane from '../assets/dioxane.jpg'
import stormwater from '../assets/stormwater.jpg'

const IndexPage = () => (
  <div>
    <Title>
      <span>City of Ann Arbor</span>
      Citizen<br />Sustainability<br />Certificate
    </Title>

    <TextContainer>
      <p>
        Fusce pellentesque erat ante, quis consequat arcu sodales ut. Curabitur
        a sagittis sem. Praesent ac imperdiet metus. Suspendisse potenti. Duis
        vel eros ipsum. Donec non eros condimentum, mattis purus ut, molestie
        orci.
      </p>
      <h2>Three water topics</h2>
      <p>
        2018’s Citizen Sustainability Certificate features three cases about
        water for you to read and respond to:
      </p>
    </TextContainer>

    <CasesContainer>
      <Case
        kicker="Green vs. Grey"
        title="What’s the best path to sustainable stormwater management in Washtenaw County?"
        imageSrc={stormwater}
        href="https://www.learngala.com/en/cases/washtenaw-county-rain-gardens"
      />
      <Case
        kicker="Dioxane Plume Pollution"
        title="Who should deal with the groundwater contamination in a university town?"
        imageSrc={dioxane}
        href="https://www.learngala.com/en/cases/dioxane-plume"
      />
      <Case
        kicker="Controlled Dam Removal"
        title="Dammed if you do, dammed if you don’t: should Pellston remove its historic dam?"
        imageSrc={dam}
        href="https://www.learngala.com/en/cases/maple-river-dam"
      />
    </CasesContainer>

    <TextContainer>
      <h2>More details</h2>
      <p>
        Donec non eros condimentum, mattis purus ut, molestie orci. Sed non odio
        sollicitudin, consequat mi eget, dapibus justo. Suspendisse at pharetra
        quam. In at dapibus nulla, vel rhoncus nibh. Ut consequat metus et erat
        sagittis lacinia. Aliquam erat volutpat. Curabitur a sagittis sem.
        Praesent ac imperdiet metus. Suspendisse potenti. Nullam dapibus eu sem
        vel pulvinar.
      </p>
      <h3>Stuff, stuff, & more stuff</h3>
      <p>
        Donec non eros condimentum, mattis purus ut, molestie orci. Sed non odio
        sollicitudin, consequat mi eget, dapibus justo. Suspendisse at pharetra
        quam. In at dapibus nulla, vel rhoncus nibh. Ut consequat metus et erat
        sagittis lacinia. Aliquam erat volutpat. Curabitur a sagittis sem.
        Praesent ac imperdiet metus. Suspendisse potenti. Nullam dapibus eu sem
        vel pulvinar.
      </p>
    </TextContainer>
  </div>
)

export default IndexPage

const Title = styled.h1.attrs({ className: 'louder' })`
  font-weight: 200;
  margin: 1.5em 0 1em;
  text-align: center;

  span {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`

const CasesContainer = Container.extend`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 3rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
