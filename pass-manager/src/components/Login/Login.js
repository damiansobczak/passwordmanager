import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  login = e => {
    e.preventDefault();
    this.props.login();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 push-s2 mt-5">
            <div className="card">
              <div className="card-content center-align">
                <div className="card-title center-align">Zaloguj się przy pomocy konta Google</div>
                <button onClick={this.login} className="blue accent-4 btn">
                  Zaloguj
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
