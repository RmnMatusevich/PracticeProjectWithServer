const initialState = {
  loginAuthorised: JSON.parse(localStorage.getItem("auth")),
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
    default:
      return state;
  }
};

export default loginReducer;
