import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <NavLink className="site-logo" to="/">#COokMate</NavLink>
    <nav>
    <NavLink to="recipies">Random Recipies</NavLink>
    <NavLink to="categories">categories</NavLink>
    <NavLink to="ingredients">Ingredients</NavLink>
    </nav>
  </header>

  )
}

export default Navbar