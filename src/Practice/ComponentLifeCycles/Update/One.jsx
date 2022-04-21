import React, { Component } from 'react'

export class One extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       name:'Praveen'
      }
    }
 /*    static getDerivedStateFromProps(){
        return {name:'indhu....'}
    } */
    shouldComponentUpdate(){
        return true
    }
    change =()=>{
        this.setState({name:'love you'})
    }
  render() {
    return (
      <div>
          <h1>my is{this.state.name}</h1>
          <button onClick={this.change}> click</button>
      </div>
    )
  }
}

export default One