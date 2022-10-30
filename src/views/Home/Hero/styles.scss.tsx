import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const Hero = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  min-height: 33vh;
  background: var(--color-bg-dark);
  border-radius: var(--radius);

  h1 {
    max-width: 36ch;
  }

  p {
    max-width: 36ch;
  }
`

export default Hero
