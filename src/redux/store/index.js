import { combineReducers, configureStore } from "@reduxjs/toolkit";

import MyProfileReducer from "../reducers/MyProfileReducer";
// import mainReducer from "../reducers";

const rootReducer = combineReducers({
  myprofile: MyProfileReducer,
});

const store = configureStore({
  //   reducer: mainReducer
  reducer: rootReducer,
});

export default store;
