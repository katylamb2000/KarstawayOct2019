import constants from "../constants";

var initialState = {
  teacher: {}
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.SWITCHED_TO_TEACHING:
      const teacher = 
        action.data
        console.log('classmate reducer: action.data', action.data)
        // user: action.data.username
        // photos: action.data
      
      newState = teacher;
      return newState
    default:
      return state
  }}