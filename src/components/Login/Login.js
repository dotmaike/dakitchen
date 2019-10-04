import './Login.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { FirebaseContext, withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

class Login extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  static contextType = FirebaseContext;

  onSubmit = (e) => {
    e.preventDefault();

    const { context } = this;

    context.login()
      .then((response) => {
        sessionStorage.token = response.credential.accessToken;
        sessionStorage.name = response.user.displayName;
        sessionStorage.photo = response.user.photoURL;
        sessionStorage.uid = response.user.uid;
        this.setState({ error: null });

        const { history } = this.props;
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <div className="container fadeInDown">
        <div className="box-login">
          <form onSubmit={this.onSubmit}>
            <button type="submit" className="loginBtn loginBtn--google">Login with Google</button>
          </form>
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

const LoginPage = compose(
  withRouter,
  withFirebase,
)(Login);

export default LoginPage;
