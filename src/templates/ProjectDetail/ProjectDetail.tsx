// ProjectDetail:
// ___________________________________________________________________

import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { DomainDataShape, ImageNode } from '../../types'
import * as S from './styles.scss'

// ___________________________________________________________________

type GalleryProps = {
  images: ImageNode[]
}

const Gallery = ({ images }: GalleryProps) => {
  console.log('images:', images)
  return (
    <S.Gallery>
      {images.map(({ node: item }, idx) => (
        <GatsbyImage
          image={item.childImageSharp.gatsbyImageData}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="alt"
          key={idx}
        />
      ))}
    </S.Gallery>
  )
}

const ProjectDetail = ({ data }: DomainDataShape) => {
  // const images = data.images.edges || []
  console.log('images:')
  return (
    <S.ProjectDetail>
      <div className="intro">
        <h1>{data.domain.title}</h1>
      </div>

      <div className="study">
        <p>{data.domain.desc}</p>
      </div>
    </S.ProjectDetail>
  )
}

export default ProjectDetail
