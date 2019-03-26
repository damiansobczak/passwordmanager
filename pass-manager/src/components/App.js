import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Navbar";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row mb-5">
            <div className="col s8 push-s2 mt-5">
              <Login />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
