import React from "react";
import "./Navbar";

class Navbar extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <nav className="blue accent-4">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            Menadżer haseł
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.props.user ? (
              <li className="nav-cart">
                <a href="#" onClick={this.props.logout}>
                  Wyloguj
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
