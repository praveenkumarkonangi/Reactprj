import React, { Component } from 'react'

 class Massage extends Component {
     constructor(){
         super()
         this.state={
             Massage:"hello nallaballu"
         }
     }
     changeHandler=()=>{
         this.setState({
             Massage:'hello praveen'
         })
     }
  render() {
    return (
      <div>
          <h1>{this.state.Massage} </h1>
          <button on onClick={()=>this.changeHandler()}>click me balu</button>
      </div>
    )
  }
}

export default Massage