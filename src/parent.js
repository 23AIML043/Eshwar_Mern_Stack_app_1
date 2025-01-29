import React from 'react'
import Child from './child'

export const Parent = (props) => {
    const message = " Hello from parent" ;
  return (
    <div>
        <h1>this is parent component</h1>
         <Child message={message} />
    </div>
  )
}