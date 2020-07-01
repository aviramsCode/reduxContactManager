//applyMiddleware - for the thunk middleware, compose - allow us to more then one thing simultaneously
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//creat store method takes an "initialState" paramater when we run it
const initialState = {};

const middleware = [thunk];

// compose allow us to put two thing into one
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
