import React from 'react'

const Msg = ({msg,setMsg}) => {
  return (
    <div>
        <h1>{msg}</h1>
        <button onClick={()=>setMsg(msg+"heoo")}>Update Again</button>
      
    </div>
  )
}

export default Msg