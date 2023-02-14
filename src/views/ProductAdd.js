import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { productAdd } from '../state-manangment/actions/productAction'
export const ProductAdd = () => {
    const dispatch = useDispatch();
    const id = useRef();
    const title = useRef();
    const price = useRef();
    const save = () => {
        let item = {};
        item.id = id.current.value;
        item.title = title.current.value;
        item.price = price.current.value;
        console.log(item)
        dispatch(productAdd(item))
    }
    return (
        <div>
            <Box
            marginLeft='834px'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div><TextField inputRef={id}  id="outlined-basic" label="id" variant="outlined"/></div>
                <div><TextField inputRef={title} id="outlined-basic" label="title" variant="outlined" /> </div>
                <div><TextField inputRef={price} id="outlined-basic" label="price" variant="outlined" /> </div>
                <div><Button variant="outlined" onClick={() => save()}>add</Button> </div>

            </Box>
        </div>
    )
}
