import React from "react";
import { CustomLink } from "./CustomLink";
// We import NavLink to utilize the react router.

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <CustomLink to="/todolist" className="nav-link">
                Todos
              </CustomLink>
            </li>
            <li className="navbar-item">
              <CustomLink to="/todolist/create" className="nav-link">
                Create Todo
              </CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
