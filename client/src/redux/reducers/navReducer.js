const initialState = {
  navigationVisibility: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_NAVIGATION_VISIBILITY":
      return { ...state, navigationVisibility: action.visibility };
    default:
      return state;
  }
};

export default navReducer;
