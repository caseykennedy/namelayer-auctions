// HomeView:

import * as React from 'react'

// Components
import Section from '../../components/Section'
import Marquee from '../../components/Marquee'

// Sections
import Hero from './Hero'
import Projects from './Projects'
import Sites from './Sites'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Home = () => (
  <S.Home>
    <Hero />
    <Projects />
    <Sites />
    <Marquee>
      <div>x/</div>
      <div>🤙</div>
      <div>crypto/</div>
      <div>👽</div>
      <div>meta/</div>
      <div>🌊</div>
    </Marquee>
  </S.Home>
)

export default Home
