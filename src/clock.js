import React,{useState,useEffect} from 'react'
export const Clock = () => {
    const [value,setValue]=useState(0);

    useEffect(()=>{
        console.log('Updated Count' ,value);
    },[value])
  return (
    <div>
        <h1>Clock</h1>
        <h2>{value}</h2>
        <button onClick={()=>{setValue(value+1)}}>'+'</button>
        <button onClick={()=>{setValue(value-1)}}>'-'</button>
        <button onClick={()=>{setValue(0)}}>Reset</button>
    </div>
  )
}