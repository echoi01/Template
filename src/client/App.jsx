import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { BrowserRouter as Router } from 'react-router-dom';
// const io = socketIOClient('http://localhost:3333/lobby');


// import './app.css';
import Login from './containers/Login.jsx';
import Signup from './containers/Signup.jsx';
import Home from './containers/Home.jsx';
import * as actions from './actions/actions';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  // LifeCycles
  componentDidMount() {
    // io.on('broadcast', msg => console.log(msg));
    console.log("hitting component did mount");

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

  verifyToken = () => {

  }

  generateLoginField = () => {
  const { loginSignupToggle } = this.props;
    return loginSignupToggle ? <Login /> : <Signup />;
  }

  render() {
    const { currentUser } = this.props;
    return (
      <React.Fragment>
        <input type="text" onChange={this.handleKeystroke} />
        <input type="button" value="Join Room" onClick={this.joinRoom} />
        <input type="button" value="Leave Room" onClick={this.leaveRoom} />
        { currentUser
          ? <Home />
          : this.generateLoginField()
        }
      </React.Fragment>
    );
  }
}


const mapStateToProps = store => ({
  isLoggedIn: store.login.isLoggedIn,
  loginSignupToggle: store.login.loginSignupToggle,
  currentUser: store.login.currentUser,
});

const mapDispatchToProps = dispatch => ({
  // setIsLoggedIn: bool => dispatch(actions.setIsLoggedIn(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
