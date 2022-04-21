import React, { Component } from 'react'

export class One extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'praveen',
         sal:'45000'
      }
    }
  render() {
    return (
      <div>
        <h1>helo:{this.state.name.s}</h1>  
      </div>
    )
  }
}

export default One