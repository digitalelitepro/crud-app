import React from 'react'
import {Link , NavLink } from 'react-router'

function Nav() {
  return (
    <header>
      <Link to="/"><h1>CRUD App</h1></Link>
      <nav>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink> 
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </header>
  )
}

export default Nav