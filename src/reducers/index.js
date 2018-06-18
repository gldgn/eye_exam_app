// src/reducers/index.js
import { combineReducers } from "redux";
import { LOAD_APPLICATION } from "../actions";

const appReducer = (state = { loaded: false }, action) => {
  switch (action.type) {
    case LOAD_APPLICATION:
      return Object.assign({}, state, { loaded: true });
    default:
      return state;
  }
};

const rootReducer = combineReducers({ appReducer });
export default rootReducer;
