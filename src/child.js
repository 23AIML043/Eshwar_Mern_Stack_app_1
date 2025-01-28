import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>This is child component👶</h1>
        <p>This is a Message {props.message}</p>
    </div>
  )
}

export default Child;