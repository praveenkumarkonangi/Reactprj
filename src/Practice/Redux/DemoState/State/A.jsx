import React,{useState} from 'react';
import B from './B';
import C from '../Child/C'
const A = () => {
  const [counter,setCounter]=useState(0);
  return (<>
    <h1>{counter}</h1>
    <button 
    onClick={()=>setCounter(counter+1)}>Update</button>
    <hr />
    <B counter={counter} setCounter={setCounter}/>
    <hr />
    <C counter={counter} setCounter={setCounter}/>
  </>)
}

export default A;