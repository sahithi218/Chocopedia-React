import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Search from "./Search";

const NavBar = props => {
  return (
    <React.Fragment>
      <div className="navBar">
        <ul>
          <li className="header">Chocolate Collection</li>
          <li className="nav">
            <NavLink
              className="link"
              to="/home"
              activeStyle={{ color: "white" }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              className="link"
              to="/brands"
              activeStyle={{ color: "white" }}
            >
              Brands
            </NavLink>
          </li>
          <li className="nav">
            <NavLink
              className="link"
              to="/chocolates"
              activeStyle={{ color: "white" }}
            >
              Chocolates
            </NavLink>
          </li>
          <li className="search-btn">
            <Search />
          </li>
          <li className="logout-btn">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
