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
    <Marquee>
      <div>web + app dev</div>
      <div>ui + ux</div>
      <div>design systems</div>
      <div>wireframing</div>
      <div>prototyping</div>
    </Marquee>
    <Projects />
    <Sites />
  </S.Home>
)

export default Home
