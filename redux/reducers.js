import { combineReducers } from "redux";
import {moduleName as post} from './../ducks/post'
import {postReducer} from './../ducks/post'

export default combineReducers({
  [post]: postReducer
});
