import React, { Component } from 'react'

 class Employeelist extends Component {
  render() {
    return (
      <div>
          
          <table  className='table tbale-hover  table-dark'>
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