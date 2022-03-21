import React from 'react';

const B = ({counter,setCounter}) => {
  return (<>
    <h6>{counter}</h6>
    <button onClick={()=>setCounter(counter+1)}>Update Again</button>
  </>)
}

export default B;