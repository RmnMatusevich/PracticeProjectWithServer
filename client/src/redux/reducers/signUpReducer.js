import {
  ACTION_CHANGE_SIGN_UP_USERNAME,
  ACTION_CHANGE_SIGN_UP_PASSWORD,
  ACTION_CHANGE_SIGN_UP_PASSWORD_REPEAT,
  ACTION_CHANGE_SIGN_UP_FIRST_NAME,
  ACTION_CHANGE_SIGN_UP_LAST_NAME,
  ACTION_CHANGE_SIGN_UP_AGE,
  ACTION_CHANGE_SIGN_UP_REDIRECT,
} from "../globalVariables";

const initialState = {
  signUpUsername: "",
  signUpPassword: "",
  signUpPasswordRepeat: "",
  signUpFirstName: "",
  signUpLastName: "",
  signUpAge: "",
  singUpRedirect: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_SIGN_UP_USERNAME:
      return { ...state, signUpUsername: action.username };
    case ACTION_CHANGE_SIGN_UP_PASSWORD:
      return { ...state, signUpPassword: action.password };
    case ACTION_CHANGE_SIGN_UP_PASSWORD_REPEAT:
      return { ...state, signUpPasswordRepeat: action.password };
    case ACTION_CHANGE_SIGN_UP_FIRST_NAME:
      return { ...state, signUpFirstName: action.firstName };
    case ACTION_CHANGE_SIGN_UP_LAST_NAME:
      return { ...state, signUpLastName: action.lastName };
    case ACTION_CHANGE_SIGN_UP_AGE:
      return { ...state, signUpAge: action.age };
    case ACTION_CHANGE_SIGN_UP_REDIRECT:
      return { ...state, singUpRedirect: action.red };
    default:
      return state;
  }
};

export default signUpReducer;
