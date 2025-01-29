import React from 'react'
import {useState } from 'react';
function Message_hooks() {
    const [message,setMessage]=useState('Click the Button to see a message!');
    const handleClick=()=>{
        setMessage('Hello,You clicked the Button!');
    };
    const handleclick2 =()=>{
        setMessage("Hey u clicked 2nd button")
    }
  return (
    <div>
        <h1>
        {message}
        </h1>
        <button onClick={handleClick}>
        Click Me!
        </button>
        <button onClick={handleclick2}>clickme
        </button>
    </div>
  )
}
export default Message_hooks