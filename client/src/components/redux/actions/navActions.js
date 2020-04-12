import { ACTION_CHANGE_NAVIGATION_VISIBILITY } from "../globalVariables";

function setVisibilityThunk(visibility) {
  return (dispatch, getState) => {
    console.log(`Action type: ${setVisibility(visibility).type}`);
    console.log(`Before update ${getState().nav.navigationVisibility}`);
    dispatch(setVisibility(visibility));
    console.log(`After update ${getState().nav.navigationVisibility}`);
  };
}

function setVisibility(visibility) {
  return {
    type: ACTION_CHANGE_NAVIGATION_VISIBILITY,
    visibility: !visibility,
  };
}

export { setVisibilityThunk };
