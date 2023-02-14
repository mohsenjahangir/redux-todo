import {INCREMETN,DECREMENT} from '../actions/actionTypes'

export const countReducer=function (state=0,action){
  switch(action.type){
    case INCREMETN:
      return state + 1;
      case DECREMENT:
        return state - 1;
        default:
          return state
  }
};
