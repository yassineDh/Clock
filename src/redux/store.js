import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import editorReducer from "./ReducerGlob";

const initialstate = {};

const middleware = [thunk];

const store = createStore(
  editorReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;