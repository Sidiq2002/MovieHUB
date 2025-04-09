import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.Search.value;
    e.target.reset();
    navigate(`/search?q=${queryTerm}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login");
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const mobileMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
      <div className="container-fluid">
        <h4>
          <a className="navbar-brand">
            <i className="bi bi-camera-reels text-light me-1"></i>
            MovieHUB
          </a>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          onClick={mobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
          id="menu"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/top"
                className="nav-link"
                onClick={closeMenu}
              >
                Top Rate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/popular"
                className="nav-link"
                onClick={closeMenu}
              >
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies/upcoming"
                className="nav-link"
                onClick={closeMenu}
              >
                Upcoming
              </NavLink>
            </li>
            {/* <li className="nav-item"><a to=" " className="nav-link"></a></li> */}
          </ul>
          <form onSubmit={handleSearch}>
            <input
              type="Search"
              className="form-control form-control-sm"
              placeholder="Search"
              name="Search"
            />
          </form>
          <button
            type="submit"
            onClick={handleLogout}
            className="btn btn-sm btn-outline-info button-logout ms-lg-3"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
