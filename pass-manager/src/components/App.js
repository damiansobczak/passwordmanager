import React, { Component } from "react";
import Navbar from "./Navbar";
import PasswordList from "./PasswordList";
import PasswordForm from "./PasswordForm";
import Login from "./Login";
import firebase, { auth, provider } from "./firebase";

class App extends Component {
  state = {
    passwords: [],
    user: null
  };

  addPassword = password => {
    const itemsRef = firebase.database().ref("items");
    itemsRef.push(password);
    const passwordsTmp = this.state.passwords;
    passwordsTmp.push(password);
    this.setState({ passwords: passwordsTmp });
  };

  login = () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({ user });
    });
  };

  logout = () => {
    auth.signOut().then(() => {
      this.setState({ user: null });
    });
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

    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
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
        ) : (
          <Login login={this.login} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
