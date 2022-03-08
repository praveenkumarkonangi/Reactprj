import React from 'react'

function CompA(props) {
  return (
    <div>
      {/*   <pre>{JSON.stringify(props)}</pre>
        <h1>props name:{props.Name}</h1> */}
        <p>{props.Age}</p>
        <ul>
          {
            props.Name.map((ele,index)=>{
              return <li key={index}>{ele.name } </li>
             
            })
          }
        </ul>
    </div>
  )
}

export default CompA