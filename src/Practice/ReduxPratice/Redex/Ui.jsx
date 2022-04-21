import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {IncrementAction,DecrementAction} from './Action/A'

const Ui = () => {
    const Storevalue = useSelector((name)=>{
        return name.count
    })
    const dispatch = useDispatch();

  return (<>
 
<div>
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-header">
          <h1>name ( {Storevalue.name} )</h1>
          </div>
          <div className="card-body"> <button className='m-2'
        onClick={()=>{dispatch(DecrementAction())}}>DECR</button>
        <button className='m-2'
        onClick={()=>{dispatch(IncrementAction())}}>INCR</button></div>
        </div>
      </div>
    </div>
  </div>
  </div>   
  </>)
}

export default Ui;