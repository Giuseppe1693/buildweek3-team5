//Qui si dovrebbero combinare tutti i reducers del sito in un unico rootReducer.

import { combineReducers } from "redux";
import { MyFooterActions } from "../actions/MyFooterActions";
// import MyFooterReducer from "./footerReducer";

// Uniamo tutti i reducers in un unico rootReducer
const rootReducer = combineReducers({
  footer: MyFooterActions,
});

export default rootReducer;
