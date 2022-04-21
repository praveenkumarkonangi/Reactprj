import React from 'react'
import {useState}from 'react';
import Msg from './Msg'

const App = () => {
    let [msg,setMsg]=useState("hey")
  return (
    <>
    <h1>Hellopraveen:{msg}</h1>
    <button onClick={()=>setMsg(msg+"raja")}>click</button>
    <hr/>
    <Msg msg={msg} setMsg={setMsg}/>
    </>
  )
}

export default App