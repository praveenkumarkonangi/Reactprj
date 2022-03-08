import React from 'react'
import CompA from './CompA';
function App() {
  const Car=[
    {
      name:'praveen',
      age:26
    },
    {
      name:'karthik',
      age:26
    }];
    const Age='23';
   
  
    return ( 
    <div >
        <h1>name:</h1>
        <CompA Name={Car} Age={Age}/>
     </div>
    );
}

export default App