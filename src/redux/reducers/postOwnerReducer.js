import constants from "../constants";

var initialState = {
  postOwner: {}
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case constants.OWNER_RECEIVED:
      const owner = 
        action.data
        // user: action.data.username
        // photos: action.data
      
      newState.owner = owner;
      return newState;
    default:
      return state;
  }
};