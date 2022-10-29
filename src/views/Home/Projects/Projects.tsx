// Projects:

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Hooks
import useProjects from '../../../hooks/useProjects'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const imageVariants = {
  large: {
    y: 0,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
  small: {
    y: -11,
    transition: {
      y: { stiffness: 400, velocity: -400, duration: 0.25, ease: 'easeInOut' },
    },
  },
}

const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -1000 },
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.175, delayChildren: 0.175 },
  },
}

const Projects = () => {
  const projects = useProjects()
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.05,
  })

  useEffect(() => {
    const isVisible = async () => {
      if (inView) {
        await controls.start('visible')
      }
    }
    isVisible().catch(console.error)
  }, [controls, inView])

  return (
    <S.Projects
      animate={controls}
      initial="hidden"
      variants={staggerItems}
      ref={ref}
    >
      <div className="project-grid">
        {projects.map(({ node: domain }) => (
          <motion.div
            variants={polyVariant}
            initial={['closed', 'large']}
            whileHover={['open', 'small']}
            animate={['closed', 'large']}
            key={domain.title}
            className="project"
          >
            <Link to={`/projects/${domain.slug}`}>
              <div className="project__meta">
                <motion.div className="domain" variants={imageVariants}>
                  {domain.domain}
                </motion.div>
                <div className="title">
                  <div>{domain.punycode}</div>
                  {domain.title}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </S.Projects>
  )
}

export default Projects
