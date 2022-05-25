import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

function CreateUser(){
const [createUser, setCreateUser] = useState({name:"", username:"", password:""})

    function handleUserInfo(e){
        setCreateUser({...createUser, [e.target.name]: e.target.value})
        }

    function handleSubmit(e){
        e.preventDefault()
            
        fetch(`/users`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(createUser)
            })
            .then(res => res.json())
            .then(user=>{
                  console.log(user)
                }) 
            }
    
    return(
        <body>
            <h1>Create User</h1>
            <form onSubmit= {handleSubmit}>
                <h2>Name</h2>
                <input onChange ={handleUserInfo} name="name"/>
                <h2>Username</h2>
                <input onChange ={handleUserInfo} name="username"/>
                <h2>Password</h2>
                <input onChange ={handleUserInfo} type="password"name="password"/>
                <button type="submit">Submit</button>
            </form>
            <NavLink exact to ="/">Done</NavLink>
        </body>
    )

}

export default CreateUser