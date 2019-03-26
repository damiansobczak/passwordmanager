import React from "react";
import "./Navbar";

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
              <a href="/">Hasła</a>
            </li>
            <li>
              <a href="/" className="nav-cart">
                Wyloguj się
              </a>
            </li>
            {console.log(this.props.favorite)}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
