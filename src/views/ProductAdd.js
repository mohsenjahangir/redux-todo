import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {productAdd} from '../state-manangment/actions/productAction'
export const ProductAdd = () => {
    const dispatch=useDispatch();
    const id=useRef();
    const title=useRef();
    const price=useRef();
    const save=()=>{
        let item={};
        item.id=id.current.value;
        item.title=title.current.value;
        item.price=price.current.value;
        console.log(item)
        dispatch(productAdd(item))
    }
  return (
    <div>
        <div>
            id:<input ref={id}/>
        </div>
        <div>
            title:<input ref={title}/>
        </div>
        <div>
            price:<input ref={price}/>
        </div>
        <button onClick={()=>save()}>add</button>
    </div>
  )
}
