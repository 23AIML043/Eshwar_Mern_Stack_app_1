import './App.css';
import { useState } from "react";

function App1() {
    const one = [1, 2, 3];
    const two = [4, 5, 7, 9];
    const [final, setfinal] = useState("");

    return (
        <>
            <div className='p-6 bg-gray-100'>
                <h1>one: [{one.join(", ")}]</h1>
                <h2>two: [{two.join(", ")}]</h2>
                <h3>final: [{final}]</h3>
                <button
                    className='bg-blue-500'
                    onClick={() => setfinal(one.concat(two).join(", "))}
                >
                    click me
                </button>
            </div>
        </>
    );
}

export default App1;
