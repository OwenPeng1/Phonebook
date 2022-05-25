import React from "react";
import {NavLink,useHistory} from 'react-router-dom'

function Login({setCurrentUser, setUser, user}){

    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(data => { console.log(data)
        setCurrentUser(data)
        history.push("/Contacts")})
        
    }

    function handleUserLogin(e){
        setUser({...user, [e.target.name]: e.target.value})
          }
    
    function handleLogout(){
        fetch("/logout", {method: "DELETE"})
        .then(r => r.json())
        .then(() => {
            setCurrentUser(null)
            })
          }


    return(
       <main>
        <h1>Welcome Login</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleUserLogin} name="username"/>
          <input onChange={handleUserLogin} name="password" type="password"/>
          <input type="submit"/>
     
          
        </form>
        <NavLink exact to ="/User"> SignUp </NavLink>
        <button onClick={handleLogout}>Logout</button>
      </main>
    )

}

export default Login