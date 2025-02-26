import { combineReducers, configureStore } from "@reduxjs/toolkit";

import MyProfileReducer from "../reducers/MyProfileReducer";
import ProfileUserPageReducer from "../reducers/ProfileUserPageReducer";

// import mainReducer from "../reducers";

const rootReducer = combineReducers({
  myprofile: MyProfileReducer,
  profileuser: ProfileUserPageReducer,
});

const store = configureStore({
  //   reducer: mainReducer
  reducer: rootReducer,
});

export default store;
