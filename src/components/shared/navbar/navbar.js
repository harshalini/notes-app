import { NavLink } from "react-router-dom"
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="page-links">NotliFy</NavLink>
      </div>
      <nav>
        <ul className="nav-pages">
          <li className="login-btn">
            <NavLink to="/" className="page-links login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}