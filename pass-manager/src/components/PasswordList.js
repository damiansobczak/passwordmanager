import React from "react";
import PasswordItem from "./PasswordItem";

class PasswordList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="card-title">Twoje hasła</div>
          <PasswordItem />
        </div>
      </div>
    );
  }
}

export default PasswordList;
