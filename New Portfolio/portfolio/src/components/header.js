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
        <h3>
          <Link to="/">logo</Link>
        </h3>
        <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
          <li className="nav-link">
            <a href="">Home</a>
          </li>
          <li className="nav-link">
            <a href="">About Us</a>
          </li>
          <li className="nav-link">
            <a href="">Contact Us</a>
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
