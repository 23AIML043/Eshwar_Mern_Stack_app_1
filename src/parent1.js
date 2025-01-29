import React, { useState } from 'react';
import {Child1} from './child1';
import { Grandmother } from './Grandmother';

export const Parentcomp = () => {
    const [msg,setmsg]=useState("Hi from parent")
    const[childmsg,setchildmsg]=useState('')
    const[grandmamsg,setgrandmamsg]=useState('')
    const onchange=(message,message2)=>
    {
        setchildmsg(message)
        setgrandmamsg(message2)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>{msg}</h1>
        <h2>{childmsg}</h2>
        <h2>{grandmamsg}</h2>
        <child1 msg={msg} datafromchild={onchange}/>
    </div>
  )
}




/*

import React, { useState } from 'react'
import Child1 from './child1';

const Parent1 = () =>{
    const parent_message = "Hello from Parent";
    const [child_message,setChildMessage] = useState("Hai")

     const datafromchild = (message) =>{
        setChildMessage(message);
     }

     return(
        <div>
        <h1>Parent Component</h1>
        <p>Data from Parent:{parent_message}</p>
        <p>Data from Child:{child_message}</p>
        <Child1 msg={parent_message} datatoparent = {datafromchild} />
        </div>
    )
    
}
*/
export default Parentcomp;