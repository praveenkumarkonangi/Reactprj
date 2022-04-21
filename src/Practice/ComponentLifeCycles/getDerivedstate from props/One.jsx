import React, { Component } from 'react'

export class One extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'praveen',
         sal:'888888'
      }
    }
   static getDerivedStateFromProps(){
       
       return {name:'raju'}
   }
  
   
  render() {
    return (
      <div>
          <h2>hello {this.state.name}</h2>
      </div>
    )
  }
}

export default One