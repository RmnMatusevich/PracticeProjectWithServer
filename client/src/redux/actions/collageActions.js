import {
  ACTION_CHANGE_IMAGE,
  ACTION_CHANGE_TITTLE,
  ACTION_CHANGE_DESCRIPTION,
  ACTION_CHANGE_USER_INPUT,
  ACTION_CHANGE_COLLAGE,
} from "../globalVariables";

function setImageThunk(image) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setImage(image).type}`);
    console.log(`Before update ${getState().collage.collageImage}`);
    dispatch(setImage(image));
    console.log(`After update ${getState().collage.collageImage}`);
  };
}

function setTittleThunk(tittle) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setTittle(tittle).type}`);
    console.log(`Before update ${getState().collage.collageTittle}`);
    dispatch(setTittle(tittle));
    console.log(`After update ${getState().collage.collageTittle}`);
  };
}

function setDescriptionThunk(description) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setDescription(description).type}`);
    console.log(`Before update ${getState().collage.collageDescription}`);
    dispatch(setDescription(description));
    console.log(`After update ${getState().collage.collageDescription}`);
  };
}

function setCollageThunk(collage) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setTittle(collage).type}`);
    console.log(getState().collage.collageCollage);
    dispatch(setCollage(collage));
    console.log(getState().collage.collageCollage);
  };
}
function setUserInputThunk(userInput) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setUserInput(userInput).type}`);
    dispatch(setUserInput(userInput));
    console.log(`After update ${userInput}`);
  };
}

function setImage(image) {
  return {
    type: ACTION_CHANGE_IMAGE,
    image,
  };
}
function setTittle(tittle) {
  return {
    type: ACTION_CHANGE_TITTLE,
    tittle,
  };
}
function setDescription(description) {
  return {
    type: ACTION_CHANGE_DESCRIPTION,
    description,
  };
}
function setUserInput(userInput) {
  return {
    type: ACTION_CHANGE_USER_INPUT,
    userInput,
  };
}
function setCollage(collage) {
  return {
    type: ACTION_CHANGE_COLLAGE,
    collage,
  };
}

export {
  setUserInputThunk,
  setImageThunk,
  setTittleThunk,
  setDescriptionThunk,
  setCollageThunk,
};
