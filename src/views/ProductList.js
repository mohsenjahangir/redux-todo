import React from 'react'

import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux'
import { productRemove } from '../state-manangment/actions/productAction';

export const ProductList = () => {
    const products=useSelector(store=>store.productState)
    const dispatch=useDispatch();
    const remove=(id)=>{
        dispatch(productRemove(id))
    }
  return (
    <div>
        {products.map((item,id)=>
        <ul key={item.id}>
            <li>{item.title}-{item.price}</li>
            <Button variant="outlined" color="error" onClick={()=>remove(item.id)}>remove</Button>
        </ul>
        )}
    </div>
  )
}
