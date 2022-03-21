import React from 'react';

const C = ({counter,setCounter}) => {
  return (<>
    <h6>{counter}</h6>
    <button onClick={()=>setCounter(counter+1)}>Update C</button>
  </>)
}

export default C;