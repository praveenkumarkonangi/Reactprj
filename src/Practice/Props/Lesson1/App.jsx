import React from 'react';
import Ramesh from './Ramesh';
import Lakshmi from './Lakshmi';

const App = () => {
    const Name = 'Praveen';
  return (
    <div>
        <h1>My name is {Name}</h1>
        <Ramesh name={Name}/>
        <Lakshmi name={Name}/>
    </div>
  )
}

export default App