import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

// when we bring our app state from redux into a componnent it will be available in props
// we access the contact state via this.props.contactIndex
// in the combineReducers we put all the reducers we have in our app
export default combineReducers({
  contactIndex: contactReducer
});
