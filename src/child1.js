import React, { useState } from 'react'

const Child1 = (props, data_for_parent_from_child) =>{
    const [child_message, setChildMessage] = useState("Hello from child");
    const send_message =()=>{
        props.datatoparent(child_message);
    }
    return(
        <div>
            <h1>Child Component </h1>
            <p>Data from Parent:{props.msg}</p>
            <button onClick ={send_message}>Send Data to Parent </button>
        </div>
    )

}

export default Child1;