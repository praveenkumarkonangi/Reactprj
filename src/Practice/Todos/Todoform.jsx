import React,{useState,useEffect} from 'react'
import Todolist from './Todolist';
const Todoform = () => {
    const instialValues={
        name:'',
        email:'',
        number:'',
        project:'',
        startDate:'',
        endDtate:'',
        task:'',
        status:''
        
    }
    const [InputValues,setInputValues]=useState(instialValues);
    const [Todos,setTodos]=useState([]);
    const[Views,setViews]=useState(false);
    const [InputErrors,setInputErrors] = useState({});
    const [isSubmit,setisSubmit] = useState(false);


    const changeHandler = (e)=>{
        setInputValues({...InputValues,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
       const newTodos=[...Todos,InputValues];
       setTodos(newTodos);
       setInputValues("");
        
    }




  return (
    <div>
         <div className="continer  m-md-auto">
             <div className="row">
                 <div className="col col-md-8  m-md-auto ">
                    
                <div className="gutter-gap">
                    <h1 className='text-center '> To do list</h1>
                    <form onSubmit={submitHandler}>
                    <div className='mb-3'>
                    <input type='text' placeholder='Enter Person Name (3-20 Chars Only)' name='name' className='form-control' value={InputValues.name}
                            onChange={changeHandler}/>
                    </div>
                    <div className='mb-3 d-md-flex'>
                    <div className='w-50 '>
                        <input type="email" placeholder='Enter a valid email 'name='email'className='form-control'  value={InputValues.email}
                            onChange={changeHandler}/>
                    </div>
                    <div className='w-50 '>
                        <input type="number" placeholder='Enter a valid number' name='number'className='form-control' value={InputValues.number}
                            onChange={changeHandler}/>
                    </div>
                    </div>
                    <div className='mb-3'>
                    <input type='text' placeholder='Enter project Name (3-20 Chars Only)' name='project' className='form-control' value={InputValues.project}
                    onChange={changeHandler}/>
                    </div>
                    <div className='mb-3'>
                    <input type='text' placeholder='Enter task Name (3-20 Chars Only)' name='task' className='form-control'value={InputValues.task}
                    onChange={changeHandler}/>
                    </div>
                    <div className='d-md-flex'>
                        <div className='w-50'>
                            <p>startDate</p>
                            <input type="date"name='startDate'className='form-control'value={InputValues.startDate}
                    onChange={changeHandler}/>
                        </div>
                        <div className='w-50'>
                            <p>endDate</p>
                            <input type="date"name='endDate'className='form-control'value={InputValues.endDtate}
                    onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className=' mb-2 d-md-flex text-center'>
                        <div className='mt-3'>
                        <input type="radio"name='status'className='form-control'value={InputValues.status}
                    onChange={changeHandler}/>progress
                        </div>
                        <div className='ml-5 mt-3 '>
                        <input type="radio"name='status'className='form-control'value={InputValues.status}
                    onChange={changeHandler}/>Done
                        </div >
                        <div className='ml-5 mt-3'>
                        <input type="radio"name='status'className='form-control'value={InputValues.status}
                    onChange={changeHandler}/>incomplete
                        </div>
                    </div>
                    <div>
                        <input type='submit'value='save'className="btn btn-primary"/> 
                        <button className='float-right btn btn-success '>view</button>  
                    </div> 
                    </form>
                   
                </div>
                 </div>
             </div>
         </div>
       <Todolist Todos={Todos}/>
    </div>
  )
}

export default Todoform