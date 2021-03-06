import React, { Component } from "react";
import "./Login.scss";
import PropTypes from "prop-types";

class Login extends Component {
  login = () => {
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

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
