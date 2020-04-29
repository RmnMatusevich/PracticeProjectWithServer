import {
  ACTION_CHANGE_SIGN_UP_USERNAME,
  ACTION_CHANGE_SIGN_UP_PASSWORD,
  ACTION_CHANGE_SIGN_UP_PASSWORD_REPEAT,
  ACTION_CHANGE_SIGN_UP_FIRST_NAME,
  ACTION_CHANGE_SIGN_UP_LAST_NAME,
  ACTION_CHANGE_SIGN_UP_AGE,
} from "../globalVariables";

function setUsernameThunk(username) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setUsername(username).type}`);
    console.log(`Before update ${getState().signUp.signUpUsername}`);
    dispatch(setUsername(username));
    console.log(`After update ${getState().signUp.signUpUsername}`);
  };
}
function setPasswordThunk(password) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setPassword(password).type}`);
    console.log(`Before update ${getState().signUp.signUpPassword}`);
    dispatch(setPassword(password));
    console.log(`After update ${getState().signUp.signUpPassword}`);
  };
}
function setPasswordRepeatThunk(password) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setPasswordRepeat(password).type}`);
    console.log(`Before update ${getState().signUp.signUpPasswordRepeat}`);
    dispatch(setPasswordRepeat(password));
    console.log(`After update ${getState().signUp.signUpPasswordRepeat}`);
  };
}
function setFirstNameThunk(firstName) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setFirstName(firstName).type}`);
    console.log(`Before update ${getState().signUp.signUpFirstName}`);
    dispatch(setFirstName(firstName));
    console.log(`After update ${getState().signUp.signUpFirstName}`);
  };
}

function setLastNameThunk(lastName) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setLastName(lastName).type}`);
    console.log(`Before update ${getState().signUp.signUpLastName}`);
    dispatch(setLastName(lastName));
    console.log(`After update ${getState().signUp.signUpLastName}`);
  };
}
function setAgeThunk(age) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setAge(age).type}`);
    console.log(`Before update ${getState().signUp.signUpAge}`);
    dispatch(setAge(age));
    console.log(`After update ${getState().signUp.signUpAge}`);
  };
}

function setUsername(username) {
  return {
    type: ACTION_CHANGE_SIGN_UP_USERNAME,
    username,
  };
}

function setPassword(password) {
  return {
    type: ACTION_CHANGE_SIGN_UP_PASSWORD,
    password,
  };
}

function setPasswordRepeat(password) {
  return {
    type: ACTION_CHANGE_SIGN_UP_PASSWORD_REPEAT,
    password,
  };
}

function setFirstName(firstName) {
  return {
    type: ACTION_CHANGE_SIGN_UP_FIRST_NAME,
    firstName,
  };
}
function setLastName(lastName) {
  return {
    type: ACTION_CHANGE_SIGN_UP_LAST_NAME,
    lastName,
  };
}

function setAge(age) {
  return {
    type: ACTION_CHANGE_SIGN_UP_AGE,
    age,
  };
}

export {
  setUsernameThunk,
  setPasswordThunk,
  setPasswordRepeatThunk,
  setFirstNameThunk,
  setLastNameThunk,
  setAgeThunk,
};
