import {NavLink} from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Product">Product</NavLink>
      <NavLink to="/About">About</NavLink>
    </nav>
  )
}

export default NavBar