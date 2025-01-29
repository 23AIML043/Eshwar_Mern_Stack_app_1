import React,{useState ,useEffect} from "react";

function ExampleComponent(){
    const[count, SetCount] = useState(0);
    useEffect(()=> {
        document.title =` You clicked ${count} times.`;
        return () => {
            document.title = `React App`;
        };
    },[count]);
    return(
        <div>
            <p>
                you clicked {count} times
            </p>
            <button onClick={()=>SetCount(count+1)}>
                Click me
            </button>
        </div>
    )
}
export default ExampleComponent;


