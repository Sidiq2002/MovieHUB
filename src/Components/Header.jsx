import { NavLink, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigator = useNavigate();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const queryTerm = e.target.Search.value;
    e.target.reset();
    return navigator(`/search?q=${queryTerm}`);
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-success navbar-dark">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">
                Top Rate
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">
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
            className="btn btn-sm btn-outline-info button-logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
