import React from "react"
import { useState } from "react"
import { Link } from "gatsby"

const Header = props => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = e => setMobileMenu(!mobileMenu)
  return (
    <header className="container">
      {/* Actual Menu*/}
      <nav>
        <Link className="nav-logo" to="/">
          <strong>bengsmith.com</strong>
        </Link>

        <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <a href="#recentProjects">See My Work</a>
          </li>
          <li className="nav-link">
            <a href="https://drive.google.com/file/d/1TUri61qg_5cdWk-E3BwkVeqX6iabqyHT/view?usp=sharing">
              See My Resume
            </a>
          </li>
        </ul>
      </nav>
      {/*Mobile Menu Utilities*/}
      <div id="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        id="close-menu"
        className={mobileMenu ? "open" : ""}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
      </div>
      <a href="#" id={mobileMenu ? "overlay" : ""} onClick={toggleMenu}></a>
    </header>
  )
}

export default Header
