import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../state-manangment/actions/countAction'
export const Counter = () => {
  const counter = useSelector(state => state.countState)
  const dispatch = useDispatch();
  return (
    <div>
      <label><h1>counter value:{counter}</h1></label>
      <br />
      <Button variant="outlined"  onClick={() => dispatch(decrement())}>-1</Button>
      <Button variant="outlined" onClick={() => dispatch(increment())}>+1</Button>

    </div>
  )
}
