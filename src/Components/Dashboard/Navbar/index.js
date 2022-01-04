import React from "react";
import "./index.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="fluid-container header">
        <div className="container white-text" style={{ padding: "7px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h6 style={{ fontWeight: "bolder", letterSpacing: "1px" }}>
              {" "}
              ReactNewsApp{" "}
            </h6>
            <p style={{ marginTop: "5px" }}>Get the latest news</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/world">WORLD</NavLink>
            </li>

            <li>
              <NavLink to="/business">BUSINESS</NavLink>
            </li>
            <li>
              <NavLink to="/science">SCIENCE</NavLink>
            </li>
            <li>
              <NavLink to="/sports">SPORTS</NavLink>
            </li>
            <li>
              <NavLink to="/tech">TECH</NavLink>
            </li>

            <li>
              <NavLink to="/health">HEALTH</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
