import React, { Component } from 'react'

 class Employeelist extends Component {
  render() {
    return (
      <div>
          <h1>hey</h1>
          <table border="2">
              <thead>
                  <tr>
                      <th>name</th>
                      <th>sal</th>
                      <th>loc</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.props.emp.map((Emlpoyees)=>{
                      return(
                        <tr>
                      <td>{Emlpoyees.name}</td>
                      <td>{Emlpoyees.sal}</td>
                      <td>{Emlpoyees.loc}</td>
                  </tr>
                      )   
                      })
                  }
                  
              </tbody>
          </table>
      </div>
    )
  }
}

export default Employeelist