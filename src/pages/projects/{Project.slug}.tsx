// Post:
// ___________________________________________________________________

import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/SEO'
import ProjectDetail from '../../templates/ProjectDetail'

import { DomainDataShape } from '../../types'

// ___________________________________________________________________

const ProjectPage = (props: DomainDataShape) => {
  const { data } = props
  const { domain } = data
  console.log('project:', domain)
  return (
    <>
      <SEO
        pathname={domain.slug}
        title={`${domain.title} | Namelayer Auctions`}
        desc={domain.desc}
        // node={domain.parent}
      />
      <ProjectDetail data={data} />
    </>
  )
}

export default ProjectPage

// ___________________________________________________________________

export const query = graphql`
  query ($id: String!) {
    domain: project(id: { eq: $id }) {
      title
      domain
      desc
      slug
      punycode
      unicode
      category
      color
      images
      released
      parent {
        ... on File {
          modifiedTime
          birthTime
        }
      }
    }
  }
`
