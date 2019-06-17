
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import _ from "lodash";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.login = this.login.bind(this);
  }

  backToSignup = (e) => {
    e.preventDefault();
    this.props.setLoginSignupToggle(false);
  }

  login(e) {
    e.preventDefault();
    const user = {
      username: this.username.current.value,
      password: this.password.current.value,
    }
    this.props.userLogIn(user);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
          <br />
        <input ref={this.username} type="text" name="username" placeholder="Username" />
          <br />
        <input ref={this.password} type="text" name="password" placeholder="Password" />          
          <br />
        <input type="button" value="Login" onClick={this.login} />
        <input type="button" value="Back to Sign Up" onClick={this.backToSignup} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
});

const mapDispatchToProps = (dispatch) => {
  return {
      setLoginSignupToggle: (bool) => {
          dispatch(actions.setLoginSignupToggle(bool));
      },
      userLogIn: (user) => {
        dispatch(actions.userLogIn(user));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// const mapStateToProps = store => ({
//   isLoggedIn: store.login.isLoggedIn
// });

// const mapDispatchToProps = dispatch => ({
//   setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool)),
//   setLoginSignupToggle: bool => dispatch(actions.setLoginSignupToggle(bool))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
