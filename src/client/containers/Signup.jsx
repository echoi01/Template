import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import _ from "lodash";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.username = React.createRef();
    this.password = React.createRef();

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    this.props.setLoginSignupToggle(true);
  }

  signup(e) {
    e.preventDefault();
    // console.log(e);
    const username = this.username.current;
    const password = this.password.current;
    // console.log("this is username ref", usernameRef);
    // console.log("this is passwordRef", passwordref);
    
    // Username Password input validation
    this.props.signup({
      username: username.value,
      password: password.value
    });
  }

  onChange(event) {
    // Onchange event here for input
  }

  render() {
    return (
      <React.Fragment>
        <h1>Signup</h1>
          <br />
        <input
          ref={this.username}
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.onChange} />
          <br />
        <input
          ref={this.password}
          type="text"
          name="password"
          placeholder="Password"
          onChange={this.onChange} />          
          <br />
        <input type="submit" value="Signup" onClick={this.signup} />
        <input className="button" type="button" value="Back to Login" onClick={this.login} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.login.isLoggedIn
});

// const mapDispatchToProps = dispatch => ({
//   signup: bool => dispatch()
//   setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool)),
//   setLoginSignupToggle: bool => dispatch(actions.setLoginSignupToggle(bool))
// });

const mapDispatchToProps = (dispatch) => {
  return {
      signup: (params) => {
          dispatch(Actions.signup(params));
      },
      setIsLoggedIn: () => {
          dispatch(Results_Actions.updateFrequentFlyerPrograms(params));
      },
      updateTravelers: (params) => {
          dispatch(Traveler_Actions.updateTravelers(params));
      },
      // getFrequentFlyerSeatMap: (params) => {
      //     dispatch(Results_Actions.getFrequentFlyerSeatMaps(params));
      // },
      // updateOrderId: (params) => {
      //     dispatch(OrderId_Actions.updateOrderId(params));
      // },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
