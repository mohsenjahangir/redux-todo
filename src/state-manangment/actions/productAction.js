import { PRODUCT_ADD,PRODUCT_GET_ALL,PRODUCT_REMOVE } from "./actionTypes"

export const productAdd=(item)=>({
  type:PRODUCT_ADD,
  payload:item,
})

export const productRemove=(id)=>({
  type:PRODUCT_REMOVE,
  payload:id,
})
export const productGetAll=()=>({
  type:PRODUCT_GET_ALL
})

