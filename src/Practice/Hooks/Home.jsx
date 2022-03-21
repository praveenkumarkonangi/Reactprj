import React from 'react'
import {useState}from'react'

function Home() {
  let [sate,setSate]=useState({
    name:"babureddy",
    rol:"2020",
    sal:400000
  })
  function gnHandler(){
    setSate({name:"hello goodnt padukora puka",
  rol:2021,sal:55555})
  }
 
  return (
    <div>
       <div className="continer ml-2">
         <div className="row">
           <div className="col-md-6">
             <div className="card">
               <div className="card-header"> 
               <h1>{sate.name}</h1> 
                
               </div>
                 <div className="cardbody">
                   <table className='table  table-hover table-dar'>
                     <th>
                       <tr>
                         <td>name</td>
                         <td>rol</td>
                         <td>sal</td>
                       </tr>
                       <tbody>
                         <tr>
                           <td>{sate.name}</td>
                           <td>{sate.sal}</td>
                           <td>{sate.rol}</td>
                         </tr>
                       </tbody>
                     </th>
                   </table>
                    <button className='btn btn-primary' onClick={gnHandler}>gn</button> 
                 </div>
            
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Home