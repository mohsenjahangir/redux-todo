import { combineReducers } from "redux";
import {countReducer} from '../reducers/countReducer';
import {productReducer} from '../reducers/productReducer';

export default combineReducers({
  countState:countReducer,
  productState:productReducer,
})