

import { combineReducers, configureStore, createStore } from "redux";
import { accountReducer, postReducer, postOwnerReducer, classmateSelectedReducer, studentProfileReducer, teacherSelectedReducer, SwitchToTeachingReducer } from "../reducers";

var store;

export default {
  configureStore: initial => {
    const reducers = combineReducers({
      account: accountReducer,
      post: postReducer,
      postOwner: postOwnerReducer,
      classmateSelectedReducer: classmateSelectedReducer,
      studentProfileReducer: studentProfileReducer,
      teacherSelectedReducer: teacherSelectedReducer,
      SwitchToTeachingReducer: SwitchToTeachingReducer
    });

    const store = createStore(reducers, initial);
    return store;
  },
  currentStore: () => {
    return store;
  }
};
