import React from 'react';

const Arr = () => {
    var arr1 = [1,2,3]
    var arr2 = [4,5,6,9]
    const combinearr = () => {
        document.getElementById("res").innerHTML = arr1.concat(arr2);
    }
    return(
        <div>
            <h1> array 1 elements: {arr1.join(" ")}</h1>
            <h1> array 2 elements: {arr2.join(" ")}</h1>
            <h1 id="res"></h1>
            <button onClick={combinearr}>Combine</button>
        </div>
    )

}
export default Arr;