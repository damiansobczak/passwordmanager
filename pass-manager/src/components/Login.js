import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Podaj swoje dane</div>
          <div className="row">
            <div className="col s12">
              <input placeholder="imie@email.com" id="email" type="text" class="validate" />
            </div>
            <div className="col s12">
              <input placeholder="******" id="email" type="text" class="validate" />
            </div>
          </div>
        </div>
        <div className="card-action">
          <Link to={`/passwords`} className="blue-text">
            Zaloguj
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
