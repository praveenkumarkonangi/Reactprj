import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";
const Todofrom = () => {
  const initialValue = {
    name: "",
    email: "",
    number: "",
  };
  const [Inputvalues, setInputvalues] = useState(initialValue);
  const [todo, setTodo] = useState([]);
  const changehandler = (e) => {
    setInputvalues({ ...Inputvalues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newtods = [...todo, Inputvalues];
    setTodo(newtods);
    setInputvalues("");
  };
  const deleteHandler = (IndexValue) => {
    const FilteredTodo = todo.filter((elem, index) => index !== IndexValue);
    setTodo(FilteredTodo);
  };
  const editHandler = (editIndexValue) => {
    const FilteredTodo = todo.filter((elem, index) => index !== editIndexValue);
    setTodo(FilteredTodo);
    const editSelector = todo.find((elem, index) => index === editIndexValue);
    setInputvalues({
      name: editSelector.name,
      email: editSelector.email,
      number: editSelector.number,
    });
  };
  return (
    <div>
      <h1 className="text-center">todo form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <div class="form-group">
            <label for="exampleInputEmail1">enter name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              value={Inputvalues.name}
              
             
              onChange={changehandler}
            />
          </div>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={Inputvalues.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={changehandler}
            />
          </div>
        <input
          type="number"
          name="number"
          value={Inputvalues.number}
          onChange={changehandler}
        />
        <input type="submit" value="add" name="add" />
      </form>

      <Todolist
        todos={todo}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
};

export default Todofrom;
