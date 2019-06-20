import React, { Component } from "react";
import zxcvbn from "zxcvbn";
import "./PasswordChecker.scss";
import PropTypes from "prop-types";

class PasswordChecker extends Component {
  createPasswordLabel = result => {
    switch (result.score) {
      case 0:
        return "Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "Weak";
    }
  };

  render() {
    const password = this.props.password;
    const testedPassword = zxcvbn(password);
    return (
      <div className={`form card-form-inputs password-strength-meter ${password ? "active" : ""}`}>
        <div className="input-field col s12">
          <div className="password-strength-meter-wrapper">
            <progress className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedPassword)}`} value={testedPassword.score} max="4" />
          </div>
        </div>
      </div>
    );
  }
}

PasswordChecker.propTypes = {
  password: PropTypes.string
};

export default PasswordChecker;
