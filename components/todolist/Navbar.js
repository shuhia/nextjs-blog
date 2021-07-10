import React from "react";
import { CustomLink } from "./CustomLink";
// We import NavLink to utilize the react router.

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="" target="_blank"></a>
        <CustomLink to="/todolist/todos" className="navbar-brand">
          MERN-Stack Todo App
        </CustomLink>
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <CustomLink to="/todolist/todos" className="nav-link">
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
