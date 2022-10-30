// HomeView:

import * as React from 'react'

// Components
import Section from '../../components/Section'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import DomainSet from './DomainSet'
import Sites from './Sites'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Home = () => (
  <S.Home>
    <Section bg="var(--color-bg-dark)">
      <Hero />
    </Section>
    <Section bg="var(--color-bg-dark)" border={true} pt="var(--gutter)">
      <Marquee>
        <div>x/</div>
        <div>🤙</div>
        <div>crypto/</div>
        <div>👽</div>
        <div>meta/</div>
        <div>🌊</div>
      </Marquee>
    </Section>
    <Section>
      <DomainSet />
    </Section>
    <Section border={true}>
      asdf
    </Section>
  </S.Home>
)

export default Home
