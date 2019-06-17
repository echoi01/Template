
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import _ from "lodash";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const userData = JSON.stringify(this.props.currentUser, 2);
    return (
      <React.Fragment>
        <h1>This is the user's home page after successfully logging in</h1>
          <br />
        <pre>
            {userData}
        </pre>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.login.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
