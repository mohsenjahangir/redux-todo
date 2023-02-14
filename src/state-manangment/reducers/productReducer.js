import {PRODUCT_ADD,PRODUCT_GET_ALL,PRODUCT_REMOVE} from '../actions/actionTypes';
const initialState=[
    {
        id:1,title:'mouse',price:120
    },
    {
        id:2,title:'keyboard',price:220
    }

]
export const productReducer=function (state=initialState,action){
    switch(action.type){
        case PRODUCT_GET_ALL:
            return [...state];
        case PRODUCT_ADD:
            return [...state,action.payload];
        case PRODUCT_REMOVE:
            return [...state.filter(q=>q.id !=action.payload)];
        default:
            return state;
    }
};