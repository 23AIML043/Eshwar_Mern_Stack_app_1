import React,{useReducer} from 'react';
const ACTIONS ={
    INCREMENT:"increment",
    DECREMENT:"decrement",
    INCREMENT_BY_2:"inc_by_2",
    DECREMENT_BY_2:"dec_by_2",
    RESET: "reset"
}
function reducerfunction(state,action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return {count: state.count+1}
        case ACTIONS.DECREMENT:
            return {count: state.count-1}
        case ACTIONS.INCREMENT_BY_2:
            return {count: state.count+2}
        case ACTIONS.DECREMENT_BY_2:
            return {count: state.count-2}
        case ACTIONS.RESET:
            return {count: 0}
    }
}
 export const Usereducer = () => {
   const[state,dispatch] =useReducer(reducerfunction,{count:55})
  function increment(){
    dispatch({type: ACTIONS.INCREMENT})
  }
  function decrement(){
    dispatch({type: ACTIONS.DECREMENT})
  }
  function inc_by_2(){
    dispatch({type: ACTIONS.INCREMENT_BY_2})
  }
  function dec_by_2(){
    dispatch({type: ACTIONS.DECREMENT_BY_2})
  }
  function reset(){
    dispatch({type: ACTIONS.RESET})
  }
  console.log(state);
  return (
    <div>
       <h1>{state.count}</h1>     
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>  
      <button onClick={inc_by_2} >Increment by 2</button> 
      <button onClick={dec_by_2} >decrement by 2</button> 
      <button onClick={reset} >Reset</button> 
 

    </div>
  )
}
export default Usereducer;
