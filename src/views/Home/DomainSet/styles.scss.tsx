// DomainSet styles:

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoint } from '../../../styles/mixins'

// ___________________________________________________________________

export const DomainSet = styled(motion.div)`
  h2 {
    font-size: var(--text-base-size);

    span {
      color: var(--color-text-muted);
      font-weight: 400;
    }
  }

  p {
    color: var(--color-text-muted);
    font-size: var(--text-md);
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    gap: 4px;

    width: 100%;

    @media ${breakpoint.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${breakpoint.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .project {
    display: flex;
    flex-flow: column nowrap;
    padding: var(--gutter);

    background: var(--color-bg-dark);
    border-radius: var(--radius-xs);
    box-shadow: var(--shadow-xs);

    &__figure {
      /* border-radius: var(--radius-sm); */
      overflow: hidden;
    }

    &__meta {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      gap: var(--space-xxxl);
      /* padding-right: var(--space-xxl); */

      .domain {
        font-size: var(--text-xxl);
      }

      .title {
        display: flex;
        flex-flow: column nowrap;
        /* color: var(--color-white); */
        font-size: var(--text-xl);
        margin-top: var(--gutter);
        transition: color var(--transition);

        div {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
        }
      }

      ul {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        /* gap: var(--space-xxs); */

        li {
          display: flex;
          place-items: center;
          padding: var(--space-xxxs) var(--space-xxxs);

          /* border: var(--border); */
          border-radius: var(--radius-sm);
          white-space: nowrap;
          transition: color var(--transition);

          /* opacity: 0; */

          &:hover {
            color: var(--color-white);
          }
        }
      }
    }

    &:hover {
      .title {
        span {
          color: var(--color-white);
        }
      }

      ul li {
        opacity: 1;
      }
    }
  }
`

export default DomainSet
