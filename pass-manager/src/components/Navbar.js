import React from "react";
import "./Navbar";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="blue accent-4">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            Menadżer haseł
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to={`/passwords`} className="nav-cart">
                Hasła
              </Link>
            </li>
            <li>
              <Link to={`/`} className="nav-cart">
                Wyloguj
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
