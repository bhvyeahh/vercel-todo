import React, { useEffect } from "react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import "../styles/body.css";
import { v4 as uuidv4 } from 'uuid';

const Body = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage when component mounts
  useEffect(() => {
    let storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  // Save todos to localStorage whenever the `todos` state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");  // Clear the input field after adding
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (e, id) => {
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="todos">
          <h3>Your Tasks</h3>
        </div>
        <div className="submit">
          <h3>Add Task</h3>
          <div className="addsubmit">
            <input onChange={handleChange} value={todo} type="text" />
            <button onClick={handleAdd} disabled={todo.length < 1} id="add">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="taskbody">
        {todos.length === 0 && <div>No Todos to display</div>}
        {todos.map(item => {
          return (
            <div key={item.id} className="todo-container">
              <div>{item.todo}</div>
              <div className="buttons">
                <button onClick={(e) => handleEdit(e, item.id)} id="edit">
                <FaRegEdit />
                </button>
                <button onClick={(e) => { handleDelete(e, item.id) }} id="del">
                <MdDeleteSweep/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Body;
