import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">


    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to="/dashboard" class="navbar-item">
        Home
      </Link>

      <Link to="/timeoff" class="navbar-item">
        Time Off
      </Link>

      <Link to="/hrmenu" class="navbar-item">
        HR Menu
      </Link>

      <Link to="/adminmenu" class="navbar-item">
        Admin Menu
      </Link>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <Link to="/" class="button is-light">
            Log out
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
