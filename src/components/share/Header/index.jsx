import { Link } from "react-router";

export default function Header(){
    return(
        <>
          <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
              <div className="col-md-3 mb-2 mb-md-0">
                <a className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                  <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
                  <span className="ms-2 fs-4">bookstore</span>
                </a>
              </div>
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><Link to="/" className="nav-link px-2">Home</Link></li>
                <li><Link to="/book" className="nav-link px-2">Book</Link></li>
                <li><Link to="/teams" className="nav-link px-2">Team</Link></li>
                <li><Link to="/contacts" className="nav-link px-2">Contact</Link></li>
              </ul>
              <div className="col-md-3 text-end">
                <Link to="/login">
                  <button type="button" className="btn btn-outline-primary me-2">Login</button>
                </Link>
                <Link to="/register">
                  <button type="button" className="btn btn-primary">Register</button>
                </Link>
              </div>
            </header>
          </div>
        </>
    )
}