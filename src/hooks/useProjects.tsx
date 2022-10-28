// useProjects hook

import { graphql, useStaticQuery } from 'gatsby'
import { IProjects } from '../types'

// ___________________________________________________________________

const useProjects = () => {
  const data = useStaticQuery<IProjects>(graphql`
    query AllProjectsQuery {
      projects: allProject {
        edges {
          node {
            category
            color
            cover {
              name
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.444
                  backgroundColor: ""
                  formats: WEBP
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            desc
            id
            images
            industry
            services
            slug
            title
            title_detail
          }
          next {
            id
          }
        }
      }
    }
  `)

  return data.projects.edges
}

export default useProjects
