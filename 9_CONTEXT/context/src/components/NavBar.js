import {NavLink} from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Product">Product</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  )
}

export default NavBar