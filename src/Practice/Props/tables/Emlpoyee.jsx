import React, { Component } from 'react'
import Empoloyeelist from'./Employeelist'

 class Emlpoyee extends Component {
     
       Emlpoyees = [{
          name:"praveen",
          sal:45000,
          loc:"bang"
       },
    {name:"indu",
    sal:'100000',
    loc:'bang'}]
     
  render() {
    return (
      <div>
          
          <Empoloyeelist  emp={this.Emlpoyees}/>
      </div>
    )
  }
}

export default Emlpoyee