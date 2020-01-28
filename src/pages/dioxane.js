import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import Case from '../components/cards/case'
import Container from '../components/container'
import AudioCard from '../components/cards/audio'
import VideoCard from '../components/cards/video'
import TextCard from '../components/cards/text'
import { Title, Header, Section, Content } from '../components/grid'

import dioxane from '../assets/dioxane.jpg'
import dioxanePodcast from '../assets/dioxane-plume_podcast_artwork.jpg'

const DioxanePage = () => (
  <Container>
    <Title>Dioxane Plume Pollution</Title>
    <Section>
      <Content full>
        <TextCard>
          With the dioxane plume and the decision of how best to pursue clean-up{' '}
          <a href="https://www.michiganradio.org/post/epa-involvement-many-years-ann-arbors-gelman-plume-cleanup">
            back in focus
          </a>
          , we have chosen to make a number of resources available here. This
          content was produced primarily for a teaching case in our Michigan
          Sustainability Cases library, but—as we believe strongly in connecting
          classroom learning and actually-unfolding sustainability issues—it
          seems relevant to share as{' '}
          <a href="https://www.mlive.com/news/ann-arbor/2020/01/epa-state-officials-to-answer-questions-about-ann-arbor-dioxane-cleanup-tonight.html">
            the issue moves foreward.
          </a>
        </TextCard>
      </Content>
    </Section>
    <Header>What should be done and by whom?</Header>
    <Section>
      <Content twothirds>
        <p>
          Decades ago, Gelman Sciences, a company on the edge of Ann Arbor,
          severely contaminated an aquifer beneath the city with a carcinogenic
          chemical, 1,4-dioxane. Since that time, a chemical plume has continued
          to migrate through the city and county, contaminating local lakes and
          private drinking water wells. In the future, the plume may threaten to
          the town's water supply and the state’s consent decree with the
          industry may not be protective of wildlife and citizens.
        </p>
        <p>
          This case study explores the question of whether the Ann Arbor city
          council should seek superfund status for the Gelman site. To some, the
          federal, state and local response to the ecological and public health
          risks has been disappointing. Local advocacy has challenged
          authorities to resolve the issue. Some say designating the site as one
          of the nation’s worst (i.e., a Superfund site) could force a better
          cleanup, while others fear that labeling Ann Arbor as a toxic site
          could bring negative consequences such as decreased property values.
        </p>
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
          title="[Podcast] Responding to a Slow-Motion Disaster"
          description="Featuring Matt Naud (Fmr. Environmental Coordinator, City of Ann Arbor); Barbara Lucas (Host of The Green Room, WEMU) Detlef Knappe (Professor of Civil, Construction, and Environmental Engineering, NC State University);
and hosts Ed Waisanen and Anna Prushinskaya."
          audioSrc="https://umich.box.com/shared/static/woyy1yq0f7l5hcscfg28cgihb0x10y0i.mp3"
        ></AudioCard>
      </Content>
      <Content half>
        <p>
          The plume of dioxane-contaminated water spreading beneath Ann Arbor
          has been called a "slow-motion environmental disaster." In this
          podcast we follow the way in which public outreach and community
          participation have shaped this issue over the years, from its
          discovery in 1984 by Dan Bicknell (a University of Michigan student
          out for a swim) to the present-day debate over whether to pursue
          Superfund status.
        </p>
        <p>
          Barbara Lucas, who has produced a{' '}
          <a href="https://www.washtenaw.org/370/14-Dioxane---The-Green-Room">
            25-part series on the plume
          </a>{' '}
          for The Green Room on WEMU, reflects on the challenge of reporting on
          a dense legal and bureaucratic issue for a public that wants to know
          if its water is safe.
        </p>
        <p>
          Matthew Naud shares his perspective from a career of dealing with the
          plume as Environmental Coordinator for the City of Ann Arbor, where he
          has seen public concern with the plume wax and wane over the years.
        </p>
        <p>
          Detlef Knappe, a Professor at North Carolina State University, helps
          us untangle the mess of dioxane levels and what they mean for human
          health. He studies dioxane contamination in North Carolina, where
          surface water contamination has so far been easier to deal with.
        </p>
      </Content>
    </Section>
    <Header>Perspectives</Header>
    <Section>
      <Content full>
        In the summer of 2018,{' '}
        <a href="https://www.teachmsc.org/msc/milestones/galaxy-2018">
          Gala held a design charette
        </a>{' '}
        on the dioxane issue in the Ann Arbor area, bringing together experts,
        stakeholders, concerned citizens, and activists. Some attendees'
        thoughts from years working on the issue are featured here.
      </Content>
      <Content half>
        <VideoCard
          title="What we know causes concern."
          description="Rita Loch-Caruso, Professor of Environmental Health Sciences at the University of Michigan, discusses why 1-4 dioxane is so good at polluting water, what is concerning about human exposure, and what we still don't know."
          videoSrc="WGGTjzM3aQY"
        ></VideoCard>
      </Content>
      <Content half>
        <VideoCard
          title="How clean should clean be?"
          description="Mitch Adelman, of the Michigan DEQ (now the Department of Environment, Great Lakes & Energy) has been involved in remediation of the Gelman site for over 16 years. He has taken to haiku to communicate the changing definition of 'clean' to stakeholders."
          videoSrc="Qj2G1fWfP5Q"
        ></VideoCard>
      </Content>
      <Content half>
        <VideoCard
          title="We still have the opportunity to do a real cleanup."
          description="Vince Caruso is Treasurer of the Coalition for Action on Remediation of Dioxane (CARD). He thinks that superfund status is the best path to a 'total cleanup' of the Gelman site because, the EPA would restore polluted water sources to their original state."
          videoSrc="GFzsNIL47kw"
        ></VideoCard>
      </Content>
      <Content half>
        <VideoCard
          title="How do you keep people engaged long-term?"
          description="Roger Rayle has been engaged with the Dioxane issue for decades, serving as chair of CARD and compiling a trove of information with Scio Residents for Safe Water. He worries about keeping the public informed and engaged over the long-haul."
          videoSrc="3lR3ug-CpxM"
        ></VideoCard>
      </Content>
    </Section>
  </Container>
)

export default DioxanePage
