import React from 'react'
import CompA from './CompA'

const App = () => {
    let name="praveen";
    let age=24;
   let location="bangalore"
  return (
    <div>
        <h1>my name:{name} </h1>
     <CompA Name={name} Age={age} Location={location}/>
    </div>
  )
}

export default App