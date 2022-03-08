import React from 'react'

function CompA(props) {
  return (
    <div>
        <h1>we are coming from props</h1>
        <h2>my name is:{props.Name} </h2>
        <h2>my age is:{props.Age}</h2>
        <h2>my location is:{props.Location}</h2>
    </div>
  )
}

export default CompA