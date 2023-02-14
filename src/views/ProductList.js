import React from 'react'
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
            <button onClick={()=>remove(item.id)}>remove</button>
        </ul>
        )}
    </div>
  )
}
