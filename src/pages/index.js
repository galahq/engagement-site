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
      <span>
        Michigan Sustainability Cases<br />& The City of Ann Arbor
      </span>
      Citizen<br />Sustainability<br />Certificate
    </Title>

    <TextContainer>
      <p>
        Never have we needed more hands to build bridges between theory and
        practice. Sustainability is fundamentally about what we can do now to
        take care of generations to come, and we need more and deeper
        connections among those of us facing challenges across the globe. While
        concerned equally with human and nonhuman life, it is mired in human
        relationships. Our field of action is strewn with terms like “political
        impasse,” “cultural barrier,” and “knowledge gap.”
      </p>

      <p>
        Such problems cannot be solved by classroom teaching alone. Curricular
        tools must connect to social fabrics to strengthen and stretch them.
        They must make learning relevant to lived challenges. They must enable
        us to more creatively confront the messes we have made…even the ones we
        don’t yet know how to clean up.
      </p>

      <p>
        That is why we are launching a pilot “Citizen Sustainability
        Certificate” program, featuring some of our best cases studies. They
        have been used in University of Michigan classrooms or field and lab
        settings. We have gathered information from teachers, students and
        practitioners about what worked well and what didn’t. We have revised
        and relaunched them, and now they are ready for you—for all of us.
      </p>

      <h2>A focus on water quality</h2>

      <p>
        The three case studies we have selected for this year are all focused on
        aspects of water quality: drinking water, stormwater, and recreational
        waters. They will help you understand scientific content like fluid
        dynamics, water ecosystems, chemical toxicity, and how risks to human
        health are evaluated. They will confer competencies including a working
        introduction to ecological and human risk assessment, data entry for
        basic water sampling, and comparative performance analysis of water
        infrastructure. And they will inspire citizenship skills by encouraging
        cross site comparative thinking, intercultural collaboration, critical
        analysis, and communication.
      </p>
    </TextContainer>

    <CasesContainer>
      <Case
        kicker="Green vs. Grey"
        title="What’s the path to sustainable stormwater management in Washtenaw County?"
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
      <p>
        For those who complete these three water cases, a certificate will be
        conferred by the City of Ann Arbor and the University of Michigan School
        for Environment and Sustainability at next year’s Galaxy event. At that
        time, a new slate of three cases will launch for certification. Climate
        change? Wildlife management? Renewable energy? Join us in establishing
        the priority list, producing the modules themselves, and then testing,
        assessing and iteratively improving them. We can make our communities
        work better, and work as a model for other communities seeking to bridge
        campus/civic divides for positive change.
      </p>

      <h2>Join us</h2>

      <p>
        We built Gala, the website that hosts the cases you’ll read, to collect
        teaching cases on sustainability, and to enable collaboration between
        across case teams, classrooms, and real world contexts where case are
        used. Anyone can create, publish, and continually update a case about
        any topic they want. We named it for an apple variety commonly grown in
        Michigan. But the name also evokes a party where people come together to
        combine their resources for further work in the world. Because making
        cleaner, safer, more efficient and resilient systems for water, food,
        waste, energy, transport, recreation, and more is worth celebrating—and
        worth supporting.
      </p>

      <p>
        One of the most important ways you can support us is to join us in
        learning and teaching on these challenging topics. Be the hands that
        build the bridges within our community, between communities or even
        fields of knowledge, and between this moment and the future we want to
        make from it.
      </p>
    </TextContainer>
  </div>
)

export default IndexPage

const Title = styled.h1.attrs({ className: 'louder' })`
  font-weight: 100;
  margin: 1.5em 0 1em;
  text-align: center;

  @media (max-width: 43.75em) {
    font-weight: 200;
  }

  span {
    display: block;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.2;
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
