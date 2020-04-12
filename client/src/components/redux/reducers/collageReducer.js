import obj from "../../collageObject";

const initialState = {
  collageUserInput: "",
  collageImage: "",
  collageTittle: "",
  collageDescription: "",
  collageCollage: [...obj.collage],
};

const collageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_IMAGE":
      return { ...state, collageImage: action.image };
    case "ACTION_CHANGE_TITTLE":
      return { ...state, collageTittle: action.tittle };
    case "ACTION_CHANGE_DESCRIPTION":
      return { ...state, collageDescription: action.description };
    case "ACTION_CHANGE_COLLAGE":
      return { ...state, collageCollage: action.collage };
    default:
      return state;
  }
};

export default collageReducer;
