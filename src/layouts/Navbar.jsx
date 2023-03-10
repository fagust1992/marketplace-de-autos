import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-light  menu">
      <div className="container-fluid">
        <div className="nav-item">
          <Link to="/"> MENU</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
