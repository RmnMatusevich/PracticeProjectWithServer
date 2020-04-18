import {
  ACTION_CHANGE_AUTHORISED,
  ACTION_CHANGE_PASSWORD,
  ACTION_CHANGE_USERNAME,
  ACTION_CHANGE_REDIRECT,
} from "../globalVariables";

function setUsernameThunk(username) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setUsername(username).type}`);
    console.log(`Before update ${getState().login.loginUsername}`);
    dispatch(setUsername(username));
    console.log(`After update ${getState().login.loginUsername}`);
  };
}
function setPasswordThunk(password) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setPassword(password).type}`);
    console.log(`Before update ${getState().login.loginPassword}`);
    dispatch(setPassword(password));
    console.log(`After update ${getState().login.loginPassword}`);
  };
}
function setAuthorisedThunk(auth) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setAuthorised(auth).type}`);
    console.log(`Before update ${getState().login.loginAuthorised}`);
    dispatch(setAuthorised(auth));
    console.log(`After update ${getState().login.loginAuthorised}`);
  };
}
function setRedirectThunk(auth) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setRedirect(auth).type}`);
    console.log(`Before update ${getState().login.loginAuthorised}`);
    dispatch(setRedirect(auth));
    console.log(`After update ${getState().login.loginAuthorised}`);
  };
}
function setUsername(username) {
  return {
    type: ACTION_CHANGE_USERNAME,
    username,
  };
}

function setPassword(password) {
  return {
    type: ACTION_CHANGE_PASSWORD,
    password,
  };
}

function setAuthorised(auth) {
  return {
    type: ACTION_CHANGE_AUTHORISED,
    auth,
  };
}

function setRedirect(auth) {
  return {
    type: ACTION_CHANGE_REDIRECT,
    auth,
  };
}

export {
  setUsernameThunk,
  setPasswordThunk,
  setAuthorisedThunk,
  setRedirectThunk,
};
