const initialState = {
  loginAuthorised: false,
  loginUsername: "",
  loginPassword: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_AUTHORISED":
      return { ...state, loginAuthorised: action.auth };
    case "ACTION_CHANGE_USERNAME":
      return { ...state, loginUsername: action.username };
    case "ACTION_CHANGE_PASSWORD":
      return { ...state, loginPassword: action.password };
    case "ACTION_CHANGE_REDIRECT":
      return { ...state, loginRedirect: action.auth };
    default:
      return state;
  }
};

export default loginReducer;
