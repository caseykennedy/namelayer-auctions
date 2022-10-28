// Header
// ___________________________________________________________________

import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

// Components
import MobileNav from './MobileNav'
import Modal from '../Modal'

// Styles
import * as S from './styles.scss'

// ___________________________________________________________________

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleMenu = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Header>
        <div className="logo">
          <div className="symbol">
            <Link to="/" aria-label="Back to index page">
              Namelayer Auctions
            </Link>
          </div>
        </div>

        <div className="utils">
          <button
            type="button"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
            className="info-toggle"
          >
            info
          </button>
        </div>
      </S.Header>

      <Modal open={isNavOpen} close={toggleMenu}>
        <MobileNav isOpen={isNavOpen} handleExitOnClick={toggleMenu} />
      </Modal>
    </>
  )
}

export default Header
