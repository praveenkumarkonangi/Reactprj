import React from 'react';

const D = ({counter,setCounter}) => {
  return (<>
    <h6>{counter}</h6>
    <button onClick={()=>setCounter(counter+1)}>Update D</button>
  </>)
}

export default D;