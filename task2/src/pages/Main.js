import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `${title} `;
  }, [title]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              onClick={() => setTitle("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={() => setTitle("About")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={() => setTitle("Contact")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button>
              <NavLink to="/login" activeClassName="active"
               onClick={() => setTitle("Login")}>
                Login
              </NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink to="/register" activeClassName="active"
               onClick={() => setTitle("Register")}>
                Register
              </NavLink>
            </button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Main;
