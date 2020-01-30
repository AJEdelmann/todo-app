import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <NavLink style={{ textDecoration: "none" }} to="/">
          <h1 className="logo">TODO APP</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName="selected">
              News
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
