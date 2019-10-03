import './Login.css';

import React, { Component } from 'react';

import { FirebaseContext } from '../Firebase';

class Login extends Component {
  static contextType = FirebaseContext;

  login = () => {
    const { context } = this;

    context.login()
      .then((response) => {
        sessionStorage.token = response.credential.accessToken;
        sessionStorage.name = response.user.displayName;
        sessionStorage.photo = response.user.photoURL;
        sessionStorage.uid = response.user.uid;
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <form className="formContent">
          <button type="button" className="loginBtn loginBtn--google" onClick={this.login}>
            Login with Google
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
