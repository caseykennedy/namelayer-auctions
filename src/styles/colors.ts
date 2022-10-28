// Colors
// ___________________________________________________________________

import { css } from 'styled-components'

// ___________________________________________________________________

const Colors = css`
  :root,
  [data-theme='default'] {
    // base
    --color-black: hsl(0, 0%, 0%);
    --color-white: hsl(0, 0%, 100%);

    // background
    --color-bg: hsl(240, 5%, 17%);
    --color-bg-dark: hsl(240, 4%, 5%);
    // typography
    --color-text: hsl(245, 8%, 78%);
    --color-text-muted: hsl(245, 8%, 58%);
    --color-heading: hsl(245, 8%, 92%);
    // border
    --color-border: hsl(240, 5%, 24%);
  }
`

export default Colors
