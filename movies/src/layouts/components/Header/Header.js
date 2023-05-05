import { NavLink, Link } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className="headerv2">
      <Link to={"/"} className="logo">Logo</Link>
      <div className="nav-items">
        <NavLink to={"/"} className="nav-item">Home</NavLink>
        <NavLink to={"/upload"} className="nav-item">Contact</NavLink>
        <NavLink to={"/search"} className="nav-item">About</NavLink>
        <NavLink to={"/following"} className="nav-item">Product</NavLink>
      </div>
    </div>
  );
}

export default Header;
