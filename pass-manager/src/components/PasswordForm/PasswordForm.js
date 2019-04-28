import React from "react";
import "./PasswordForm.scss";
import { getCurrentDate } from "../../helpers";
import PasswordChecker from "../PasswordChecker/PasswordChecker";

class PasswordForm extends React.Component {
  passwordNameInput = React.createRef();
  passwordHashInput = React.createRef();
  form = React.createRef();
  submitPassword = e => {
    e.preventDefault();
    const currentDate = getCurrentDate();
    if (this.passwordNameInput.current.value && this.passwordNameInput.current.value) {
      const password = {
        name: this.passwordNameInput.current.value,
        password: this.passwordHashInput.current.value,
        date: currentDate
      };
      this.props.submitPassword(password);
      this.form.current.reset();
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Dodaj hasło</div>
          <form onSubmit={this.submitPassword} ref={this.form}>
            <div className="row card-form-inputs">
              <div className="input-field col s5">
                <input type="text" className="validate" id="password-name" ref={this.passwordNameInput} />
                <label htmlFor="password-name">Strona</label>
              </div>
              <div className="input-field col s5">
                <input type="password" className="validate" id="password-hash" ref={this.passwordHashInput} onChange={e => this.props.testPassword(e.target.value)} />
                <label htmlFor="password-hash">Hasło</label>
              </div>
              <div className="input-field col s2">
                <button className="blue accent-4 accent-bluewaves-effect waves-light btn password-copy">Zapisz</button>
              </div>
            </div>
            <PasswordChecker password={this.props.password} />
          </form>
        </div>
      </div>
    );
  }
}

export default PasswordForm;
