import { combineReducers } from "redux";
import collageReducer from "./reducers/collageReducer";
import navReducer from "./reducers/navReducer";
import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";

const rootReducer = combineReducers({
  collage: collageReducer,
  nav: navReducer,
  login: loginReducer,
  signUp: signUpReducer,
});

export default rootReducer;
