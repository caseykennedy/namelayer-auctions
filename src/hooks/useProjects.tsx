// useProjects hook

import { graphql, useStaticQuery } from 'gatsby'
import { IDomains } from '../types'

// ___________________________________________________________________

const useDomains = () => {
  const data = useStaticQuery<IDomains>(graphql`
    query AllProjectsQuery {
      domains: allProject {
        edges {
          node {
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
          next {
            id
          }
        }
      }
    }
  `)

  return data.domains.edges
}

export default useDomains
