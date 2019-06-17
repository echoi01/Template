import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import _ from "lodash";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.signup = this.signup.bind(this);
  }

  backToLogin = (e) => {
    e.preventDefault();
    this.props.setLoginSignupToggle(true);
  }

  signup(e) {
    e.preventDefault();
    const user = {
      username: this.username.current.value,
      password: this.password.current.value,
    }
    this.props.userSignUp(user);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Signup</h1>
          <br />
        <input ref={this.username} type="text" name="username" placeholder="Username" />
          <br />
        <input ref={this.password} type="text" name="password" placeholder="Password" />          
          <br />
        <input type="button" value="Signup" onClick={this.signup} />
        <input type="button" value="Back to Login" onClick={this.backToLogin} />
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
      userSignUp: (user) => {
        dispatch(actions.userSignUp(user));
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
