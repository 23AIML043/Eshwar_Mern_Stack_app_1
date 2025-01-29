import React,{useState,useReducer,useEffect} from 'react';
const ACTIONS= {
    V:"v",
    I: "i",
    B:"b",
    G:"g",
    Y:"y",
    O:"o",
    R:"r"
}
function reducerfunction(state,action){
    switch(action.type){
        case ACTIONS.V:
            return {color:"Violet"}
        case ACTIONS.I:
            return {color:"Indigo"}
        case ACTIONS.B:
            return {color:"Blue"}
        case ACTIONS.G:
            return{color:"Green"}
        case ACTIONS.Y:
            return{color:"Yellow"}
        case ACTIONS.O:
            return{color:"Orange"}
        case ACTIONS.R:
            return{color:"Red"}
    }
  }
 export const Usereducer = () => {
   const[state,dispatch] =useReducer(reducerfunction,{color:"color"})
   function colors() {
    const char = prompt("Enter:");
    switch (char) {
        case 'v':
            dispatch({ type: ACTIONS.V });
            break;
        case 'i':
            dispatch({ type: ACTIONS.I });
            break;
        case 'b':
            dispatch({ type: ACTIONS.B });
            break;
        case 'g':
            dispatch({ type: ACTIONS.G });
            break;
        case 'y':
            dispatch({ type: ACTIONS.Y });
            break;
        case 'o':
            dispatch({ type: ACTIONS.O });
            break;
        case 'r':
            dispatch({ type: ACTIONS.R });
            break;
        default:
            alert("Invalid input!");
    }
}
return (
    <div>
       
       <h1>{state.color}</h1>     
       <button onClick={colors}>color</button>
  

    </div>
  )
}
export default Usereducer