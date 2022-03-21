import React from 'react'
import Card from './Card'
const Api = () => {
    const items=[{
        RiceItems:{
            name:"indian Rice",
            img:"data:image/jpeg;base64,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"

        }
    }]
  return (
    <div>
           <h1>item{items.RiceItems.name}</h1>
           <Card name={items.RiceItems.name}/>
    </div>
  )
}

export default Api