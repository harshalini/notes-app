import { NavLink } from "react-router-dom"
import { useAuth } from "../../../context/allContext"
export const Navbar = () => {
  const {authUser, logOutHandler} = useAuth();
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="page-links">NotliFy</NavLink>
      </div>
      <nav>
        <ul className="nav-pages">
          <li className="login-btn">
            {authUser.isUserLoggedIn? <button className="logout-btn" onClick={logOutHandler}>logout</button> : <NavLink to="/login" className="page-links login">Login</NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  )
}