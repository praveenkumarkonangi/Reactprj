import React from 'react'

const Todolist = (Todos) => {
  return (
   <>
    <div className="continer">
        <div className="row">
            <div className="col">
                <table className='table tbale-hover  table-dark'>
                    <thead>
                        <tr>
                            <th>s.no</th>
                            <th>name</th>
                            <th>email</th>
                            <th>number</th>
                            <th>project</th>
                            <th>task</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Todos.length>0?(<>
                            {Todos.map((todo,index)=>{
                                return(  <tr  onClick={this.slectedContact.bind(this,todo)} kry={index}>
                                     <td>{todo.name}</td>
                                      
                                </tr>)
                            })}
                            </>):null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   </>
  )
}

export default Todolist