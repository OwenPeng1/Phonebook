import React, {useState} from "react";
import {NavLink,useHistory} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Login({setCurrentUser, setUser, user}){

    const [error, setError] = useState([])

    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
              res.json()
              .then(user=>{
                setCurrentUser(user)
                toast.success("Login Sucsessful")
                setTimeout(() => {
                history.push('/Contacts')
                }, 2000)
              })
              
            } else {
              res.json()
              .then(json => {setError(json.error)
                toast.error("Login Error")
            })
            }
          })}
      
      
        
    

    function handleUserLogin(e){
        setUser({...user, [e.target.name]: e.target.value})
          }


    return(
       <main>
        <div className="Login">
        <h1  id="welcomeLogin">Welcome </h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <h2>Username</h2>
          <input className="loginInput"onChange={handleUserLogin} name="username"/>
          <h2>Password</h2>
          <input className="loginInput" onChange={handleUserLogin} name="password" type="password"/>
          <input type="submit"/>
        </form>
        <h3> Don't have an Account? </h3>
        {error?<div>{error}</div>:null}
        <NavLink id="signUp" exact to ="/User"> Sign Up! </NavLink>
        </div>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
      </main>
    )

}

export default Login