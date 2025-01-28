import React, { useState } from "react";

function NameInput(){
    const[name, setName] = useState(" ");
    const[age, setAge] = useState(" ");
    const[email, setEmail] =useState(" ");
    const[password, setPassword] =useState(" ")
    const handleChange = (e) =>{
        setName(e.target.value);
    };
    const handleChange2 = (h)=>{
        setAge(h.target.value);
    }
    const mailChange =(mail)=>{
        setEmail(mail.target.value);
    }
    const passChange =(password)=>
    {
        setPassword(password.target.value);
    }
    return (
        <div className="pos">
            <form >
                <label>
                    Name:<input type="text" value = {name} onChange={handleChange} />
                    <br />
               
                Age : <input type="number" value ={age} onChange={handleChange2} />
                <br/>
                Email: <input type="email" value={email} onChange={mailChange} />
                <br/>
                Password: <input type="password" value={password} onChange={passChange} />
                </label>
            </form>
            <p>
                Your name is:{name} 
            </p>
            <p>
                Your age is:{age}
            </p>
            <p>
                Your email is:{email}
            </p>
            <p>
                Your Password is:{password}
            </p>
        </div>
    )

}

export default NameInput;