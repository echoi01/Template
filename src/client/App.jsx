import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
// const io = socketIOClient('http://localhost:3333/lobby');

// import './app.css';
import Login from './containers/Login.jsx';
import Signup from './containers/Signup.jsx';
import * as actions from './actions/actions';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  // LifeCycles
  componentDidMount() {
    // io.on('broadcast', msg => console.log(msg));
  }

  joinRoom = () => {
    io.emit('joinRoom', 'race-room');
  }

  leaveRoom = () => {
    io.emit('leaveRoom', 'race-room');
  }

  handleKeystroke = (event) => {
    // console.log('New Keystroke -->', event.target.value);
    io.emit('keystroke', event.target.value);
  }

  render() {
    return (
      <div id="app-container">
        <input name="keyCapture" type="text" onChange={this.handleKeystroke} />
        <input name="joinRoom" type="button" value="Join Room" onClick={this.joinRoom} />
        <input name="leaveRoom" type="button" value="Leave Room" onClick={this.leaveRoom} />
        <h1>Crypto Portfolio Fantasy</h1>
        <div>
          {this.props.loginSignupToggle 
            ? <Login /> 
            : <Signup />}
        </div>
      </div>
    );
  }
}


const mapStateToProps = store => ({
  // isLoggedIn: store.login.isLoggedIn,
  // loginSignupToggle: store.login.loginSignupToggle
});

const mapDispatchToProps = dispatch => ({
  // setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
