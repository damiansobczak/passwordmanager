import React, { Component } from "react";
import Navbar from "./Navbar";
import PasswordList from "./PasswordList";
import PasswordForm from "./PasswordForm";
import firebase from "./firebase";

class Passwords extends Component {
  state = {
    passwords: []
  };

  addPassword = password => {
    const itemsRef = firebase.database().ref("items");
    itemsRef.push(password);
    this.forceUpdate();
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          name: items[item].name,
          password: items[item].password,
          date: items[item].date
        });
      }
      this.setState({
        passwords: newState
      });
      this.forceUpdate();
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col s8 push-s2 mt-5">
              <PasswordForm submitPassword={this.addPassword} />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col s8 push-s2">
              <PasswordList passwords={this.state.passwords} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Passwords;
