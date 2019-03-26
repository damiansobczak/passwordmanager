import React, { Component } from "react";
import Navbar from "./Navbar";
import PasswordsList from "./PasswordList";

class Passwords extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row mb-5">
            <div className="col s8 push-s2 mt-5">
              <PasswordsList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Passwords;
