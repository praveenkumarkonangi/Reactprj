import React from 'react'

const Todolist = ({todos,deleteHandler ,editHandler}) => {
  return (
    <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>s.no</th>
              <th>name</th>
              
              <th>email</th>
              <th>number</th>
              <th>edit/delete</th>

            </tr>
          </thead>
          <tbody>
            {
              todos.map((todos,index)=>{
                return (
                  <tr key={index}>
                    <td>{index+1}</td>

                    <td>{todos.name}</td>
                    <td>{todos.email}</td>
                    <td>{todos.number}</td>
                 <td>
                   <div>
                    <input type="submit" value="delete" name="add" onClick={()=>deleteHandler(index)} />
                    </div>
                    <input type="submit" value="edit" name="bbbb"  onClick={()=>editHandler(index)}/>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      
    </div>
  )
}

export default Todolist