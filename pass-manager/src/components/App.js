import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import PasswordList from "./PasswordList/PasswordList";
import PasswordForm from "./PasswordForm/PasswordForm";
import Login from "./Login/Login";
import firebase, { auth, provider } from "./firebase";

class App extends Component {
  state = {
    passwords: [],
    user: null,
    password: ""
  };

  testPassword = password => {
    this.setState({ password });
  };

  addPassword = password => {
    const firebaseReference = firebase.database().ref("items");
    firebaseReference.push(password);
    const passwords = this.state.passwords;
    passwords.push(password);
    this.setState({ passwords, password: "" });
  };

  login = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({ user });
      })
      .then(() => {
        if (this.state.passwords.length < 1 && this.state.user !== null) {
          this.getDataFromFirebase();
        }
      })
      .catch(reason => {
        new Error("Ups...Something went wrong while login" + reason);
      });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
  };

  getDataFromFirebase = () => {
    const firebaseReference = firebase.database().ref("items");
    firebaseReference.on("value", snapshot => {
      let items = snapshot.val();
      let passwordsFromDb = [];
      for (let item in items) {
        passwordsFromDb.push({
          name: items[item].name,
          password: items[item].password,
          date: items[item].date
        });
      }
      this.setState({
        passwords: passwordsFromDb
      });
    });
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        this.getDataFromFirebase();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar user={this.state.user} login={this.login} logout={this.logout} />
        {this.state.user ? (
          <div className="container">
            <div className="row">
              <div className="col s12 xl8 push-xl2 mt-5">
                <PasswordForm submitPassword={this.addPassword} password={this.state.password} testPassword={this.testPassword} />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col s12 xl8 push-xl2">
                <PasswordList passwords={this.state.passwords} />
              </div>
            </div>
          </div>
        ) : (
          <Login login={this.login} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
