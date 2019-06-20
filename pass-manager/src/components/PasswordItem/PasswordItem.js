import React, { Component } from "react";
import "./PasswordItem.scss";
import PropTypes from "prop-types";

class PasswordItem extends Component {
  passwordHash = React.createRef();

  showPassword = () => {
    const password = this.passwordHash.current;
    password.type === "password" ? (password.type = "text") : (password.type = "password");
  };

  copyPassword = () => {
    const password = this.passwordHash.current.value;
    let textArea = document.createElement("textarea");
    textArea.value = password;
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    new Promise((resolve, reject) => {
      textArea.select();
      const copied = document.execCommand("copy");
      copied === true ? resolve(textArea) : reject(new Error("Nie skopiowano! Coś poszło nie tak."));
    })
      .then(password => {
        textArea.remove();
        alert("Hasło zostało skopiowane");
      })
      .catch(new Error("Ops! Something went wrong!"));
  };

  render() {
    return (
      <div className="password">
        <div className="password-name">{this.props.name}</div>
        <input type="password" readOnly defaultValue={this.props.hash} className="password-hash" ref={this.passwordHash} />
        <div className="password-date">{this.props.date}</div>
        <div className="password-actions">
          <div className="white red-text waves-effect waves-teal btn-flat password-reveal" onClick={() => this.showPassword()}>
            Odsłoń
          </div>
          <div className="blue accent-4 accent-bluewaves-effect waves-light btn password-copy" onClick={() => this.copyPassword()}>
            Kopiuj
          </div>
        </div>
      </div>
    );
  }
}

PasswordItem.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default PasswordItem;
