import constants from "../constants";

var initialState = {
  classmate: {}
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.CLASSMATE_SELECTED:
      const classmate = 
        action.data
        console.log('classmate reducer: action.data', action.data)
        // user: action.data.username
        // photos: action.data
      
      newState = classmate;
      return newState;
    default:
      return state;
  }
};