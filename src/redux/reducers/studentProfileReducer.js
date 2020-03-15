import constants from "../constants";

var initialState = {
  student: ""
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.STUDENT_PROFILE_RECIEVED:
      const student = 
        action.data
        console.log('STUDENTPROFILE reducer: action.data', action)

        // user: action.data.username
        // photos: action.data
      
      newState.student = student;
      return newState;
    default:
      return state;
  }
};