import React, { Component } from 'react'

export class one extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'praveen'
      }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({name: "reddy"})
        }, 1000)
      }

    

  render() {
    return (
      <div>
          <h1>name:{this.state.name}</h1>
      </div>
    )
  }
}

export default one