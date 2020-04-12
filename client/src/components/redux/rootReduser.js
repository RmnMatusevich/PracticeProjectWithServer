import { combineReducers } from "redux";
import collageReducer from "./reducers/collageReducer";
import navReducer from "./reducers/navReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  collage: collageReducer,
  nav: navReducer,
  login: loginReducer,
});

export default rootReducer;
