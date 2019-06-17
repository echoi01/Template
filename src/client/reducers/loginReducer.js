import * as types from '../constants/actionTypes';

const initialState = {
  isLoggedIn: false,
  loginSignupToggle: true,
  currentUser: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      console.log(action.payload);
      console.log(action);
      return {...state, currentUser: action.payload}
    case types.SET_IS_LOGGED_IN:
      return {...state, isLoggedIn: action.payload };
    case types.SET_LOGIN_SIGNUP_TOGGLE:
      return {...state, loginSignupToggle: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
