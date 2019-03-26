import React from "react";
import "./PasswordItem.scss";
class PasswordItem extends React.Component {
  showPassword = id => {
    const password = document.getElementById(`${id}`);
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  copyPassword = id => {
    let textArea = document.createElement("textarea");
    const password = document.getElementById(`${id}`);
    textArea.value = password.value;
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);

    const copy = new Promise((resolve, reject) => {
      textArea.select();
      const copied = document.execCommand("copy");
      copied === true ? resolve(textArea) : reject(new Error("Nie skopiowano! Coś poszło nie tak."));
    });

    copy
      .then(password => {
        textArea.remove();
        alert("Hasło zostało skopiowane");
      })
      .catch(new Error("Ops! Something went wrong!"));
  };

  render() {
    return (
      <div className="password">
        <div className="password-name">Google.com</div>
        <input type="password" value="Twójstary" className="password-hash" id="password-id-1" />
        <div className="password-date">12-03-2019</div>
        <div className="password-actions">
          <div className="white red-text waves-effect waves-teal btn-flat password-reveal" onClick={() => this.showPassword("password-id-1")}>
            Odsłoń
          </div>
          <a className="blue accent-4 accent-bluewaves-effect waves-light btn password-copy" onClick={() => this.copyPassword("password-id-1")}>
            kopiuj
          </a>
        </div>
      </div>
    );
  }
}

export default PasswordItem;
