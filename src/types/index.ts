import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageNode {
  node: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

// Project Shape
// ___________________________________________________________________

export type ProjectShapeProject = {
  title: string
  domain: string
  desc: string
  slug: string
  punycode: string
  unicode: string
  category: string
  color: string
  images: string
  released: boolean
  parent: {
    modifiedTime: string
    birthTime: string
  }
}

export type DomainDataShape = {
  data: {
    domain: ProjectShapeProject
    images: {
      edges: ImageNode[]
    }
  }
}

export interface IDomains {
  domains: {
    edges: {
      node: {
        title: string
        domain: string
        desc: string
        slug: string
        punycode: string
        unicode: string
        category: string
        color: string
        images: string
        released: boolean
      }
      next: {
        id: string
      }
    }[]
  }
}
