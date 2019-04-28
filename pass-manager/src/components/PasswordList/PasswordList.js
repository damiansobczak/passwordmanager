import React from "react";
import PasswordItem from "../PasswordItem/PasswordItem";

class PasswordList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Twoje hasła</div>
          {this.props.passwords.map((password, index) => (
            <PasswordItem name={password.name} hash={password.password} date={password.date} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default PasswordList;
