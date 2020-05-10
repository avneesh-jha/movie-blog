import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware/";
import thunk from "redux-thunk";

//reducers produce the state of your application
//reducer is just a JavaScript function
//It takes two parameters: current state and action
const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, thunk)
);

export default store;
