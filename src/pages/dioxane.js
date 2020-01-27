import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Case from '../components/cards/case'
import Container from '../components/container'
import AudioCard from '../components/cards/audio'
import VideoCard from '../components/cards/video'
import { Title, Header, Section, Content, Break } from '../components/grid'

import dioxane from '../assets/dioxane.jpg'
import dioxanePodcast from '../assets/dioxane-plume_podcast_artwork.jpg'

const DioxanePage = () => (
  <Container>
    <Title>Dioxane Plume Pollution</Title>
    <Header>Introduction</Header>
    {/*  <HighlightedText>
      Blach blah
    </HighlightedText> */}
    <Section>
      <Content twothirds>
        <p>
          Decades ago a local Ann Arbor industry severely contaminated the
          aquifer beneath the city with a carcinogenic chemical, 1,4-dioxane.
          Since then, a chemical plume has continued to migrate through the city
          and county, contaminating local lakes and private drinking water
          wells. In the future the plume may threaten to contaminate the town's
          water supply. and the state’s consent decree with the industry may not
          be protective of wildlife and citizens.
        </p>
        <p>
          To some, the federal, state and local response to the ecological and
          public health risks has been disappointing. Local advocacy has
          challenged authorities to resolve the issue. Some say designating the
          site as one of the nation’s worst (i.e., a Superfund site) could force
          a better cleanup, while others fear that labeling Ann Arbor as a toxic
          site could bring negative consequences such as decreased property
          values.
        </p>
        <p>What should be done?</p>
      </Content>
      <Content third>
        <Case
          kicker="Dioxane Plume Pollution"
          title="Who should deal with the groundwater contamination in a university town?"
          imageSrc={dioxane}
          href="https://www.learngala.com/cases/dioxane-plume"
        ></Case>
      </Content>
    </Section>
    <Header>A Slow-Motion Environmental Disaster</Header>
    <Section>
      <Content half>
        <AudioCard
          imageSrc={dioxanePodcast}
          title="Responding to a Slow-Motion Disaster"
          description="The plume of dioxane-contaminated water spreading beneath Ann Arbor
          for the last few decades has been called a podcast"
          audioSrc="https://umich.box.com/shared/static/woyy1yq0f7l5hcscfg28cgihb0x10y0i.mp3"
        ></AudioCard>
      </Content>
      <Content half>
        <p>
          The plume of dioxane-contaminated water spreading beneath Ann Arbor
          for the last few decades has been called a "slow-motion environmental
          disaster." We trace the way that public outreach and community
          participation have shaped this issue over the years, from its
          discovery in 1984 by Dan Bicknell (a University of Michigan student
          out for a swim) to the present-day debate over whether to pursue
          Superfund status.
        </p>
        <p>
          Barbara Lucas, who has produced a 25-part series on the plume for The
          Green Room on WEMU, reflects on the challenge of reporting on a dense
          legal and bureaucratic issue for a public that wants to know if its
          water is safe. Matthew Naud shares his perspective from a career of
          dealing with the plume as Environmental Coordinator for the City of
          Ann Arbor, where he has seen public concern with the plume wax and
          wane over the years. Detlef Knappe, a Professor at North Carolina
          State University, helps us untangle the mess of dioxane levels and
          what they mean for human health. He studies dioxane contamination in
          North Carolina, where surface water contamination has so far been
          easier to deal with.
        </p>
      </Content>
    </Section>
    <Header>Perspectives</Header>
    <Section>
      <Content full>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Content>
      <Content half>
        <VideoCard
          title="Video Card Title"
          description="Matthew Naud shares his perspective from a career of dealing with the
          plume as Environmental Coordinator for the City of Ann Arbor, where he
          has seen public concern with the plume wax and wane over the years.
          Detlef Knappe, a Professor at North Carolina State University.."
          videoSrc="w9qecT_Fzw8"
        ></VideoCard>
      </Content>
      <Content half>
        <VideoCard
          title="Video Card Title"
          description="Matthew Naud shares his perspective from a career of dealing with the
          plume as Environmental Coordinator for the City of Ann Arbor, where he
          has seen public concern with the plume wax and wane over the years.
          Detlef Knappe, a Professor at North Carolina State University.."
          videoSrc="w9qecT_Fzw8"
        ></VideoCard>
      </Content>
      <Content half>
        <VideoCard
          title="Video Card Title"
          description="Matthew Naud shares his perspective from a career of dealing with the
          plume as Environmental Coordinator for the City of Ann Arbor, where he
          has seen public concern with the plume wax and wane over the years.
          Detlef Knappe, a Professor at North Carolina State University.."
          videoSrc="w9qecT_Fzw8"
        ></VideoCard>
      </Content>
    </Section>
  </Container>
)

export default DioxanePage
