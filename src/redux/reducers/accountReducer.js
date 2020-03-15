import constants from "../constants";

var initialState = {
  user: ""
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.USER_RECEIVED:
      const user = 
        action.data
        console.log('account reducer: action.data', action)

        // user: action.data.username
        // photos: action.data
      
      newState.user = user;
      return newState;
    default:
      return state;
  }
};
