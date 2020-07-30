import React from "react"
import { Link } from 'react-router-dom'
import logo from 'img/dlorean-logo.svg'
import search from 'img/search.svg'

const Header = () => {
  return (
    <header>
      <ul className="top-grid">
        <li>
          <nav>
            <div className="menu-toggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu">
                  <li className="selected"><Link to="/login">Log in</Link></li>
                  <li><Link to="/signup">Sign up</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
          </nav>
        </li>
        <li className="header-logo">
          <Link to="/"><img src={logo} alt="DLOREAN's app logo" /></Link>
        </li>
        <li className="header-search">
          <img src={search} alt="Search icon" className="header-menu-item" />
          <form className="header-search-from">
            <label className="hide">Search</label><input type="search" placeholder="Search" className="header-search-bar" />
          </form>
        </li>
      </ul>
    </header>
  )
}

export default Header