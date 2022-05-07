import { NavLink } from "react-router-dom"
import { useAuth } from "../../../context/allContext"
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const {authUser, logOutHandler} = useAuth();
  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/" className="page-links">NotliFy</NavLink>
      </div>
      <nav>
        <ul className="nav-pages">
          <li className="login-btn">
            {authUser.isUserLoggedIn? <NavLink to="/login"><button className="logout-btn" onClick={
              logOutHandler}
              >logout</button></NavLink> : <NavLink to="/login" className="page-links login">Login</NavLink>}
          </li>
        </ul>
      </nav>
    </div>
  )
}