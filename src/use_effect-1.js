import React, { useEffect, useState } from 'react'

function Timer(){
    const [seconds, setSeconds] = useState(0);
    useEffect(() =>{
        const interval = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds +1);

        }, 700);
        return () => clearInterval(interval);

    },[]);
  return (
    <div>
        <h1>Timer:</h1>
        <p>{seconds} seconds has passed.... </p>
    </div>
  )
}

export default Timer;
