import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {IncrementAction,DecrementAction} from './Action/Action'

const Ui = () => {
    const Storevalue = useSelector((state)=>{
        return state.count
    })
    const dispatch = useDispatch();

  return (<>
        <h1>Counter ( {Storevalue.counter} )</h1>
        <button className='m-2'
        onClick={()=>{dispatch(DecrementAction())}}>DECR</button>
        <button className='m-2'
        onClick={()=>{dispatch(IncrementAction())}}>INCR</button>
  </>)
}

export default Ui;