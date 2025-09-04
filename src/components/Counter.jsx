import React from 'react'
import "../style.css";
import { useState } from 'react';


const Counter = () => {

    const [count,setCount]=useState(0);

    function handleincrement(){
        setCount(count+1)
    }

    function handledecrement(){
        setCount(count-1);
    }


  return (
    <div className="container">
        <div>
            <h1 className='number'>{count}</h1>
        </div>
        <div className='btns-container'>
            <button className='increment' onClick={handleincrement}>+</button>
            <button className='increment' onClick={handledecrement}>-</button>
        </div>
    </div>
  )
}

export default Counter