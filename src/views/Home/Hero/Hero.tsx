// Hero:
// ___________________________________________________________________

import * as React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'

// Hooks
import useDate from '../../../hooks/useDate'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Hero = () => {
  const nevadaTime = useDate()
  return (
    <S.Hero>
      <h1>
        Handshake <br />
        domain name auctions.
      </h1>
      <p>
        Single emoji, emoji combos, characters, glyphs and more. Sign up to
        participate.
      </p>
    </S.Hero>
  )
}

export default Hero
