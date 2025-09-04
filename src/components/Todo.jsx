import React from 'react'
import "../style1.css";
import { useState } from 'react';

const Todo = () => {
  const [todos,setTodos]=useState([]);
  
  const [input,setInput]=useState("");

  function handleSubmit(){
    if (!input.trim()) return;
    setTodos((todos) => [
        ...todos,
        { text: input, id: Date.now() }
    ]);
    setInput("");
    }

  const removeTodo=(id)=>{
    setTodos(todos.filter((t)=>t.id!==id))
  }

  return (
    <div className='container'>
        <input type="text" placeholder='NewTodo' value={input} 
        onChange={e=>setInput(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>
        
        <ul className='todos-list'>
            {todos.map(({text,id})=>(
                <li className='todo' key={id}>
                    <span>{text}</span>
                    <button className='close' onClick={()=>removeTodo(id)}>X</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo