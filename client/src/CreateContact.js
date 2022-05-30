import React, {useState} from "react"
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function CreateContact({fetchContacts, currentUser}){
    const [createContact, setCreateContact]= useState({firstname:"", lastname:"",
    phone_number:"", address:"", description: "", photo:"", favorite:false, user_id:currentUser.id})
    
    function handleContactInfo(e){
        setCreateContact({...createContact, [e.target.name]: e.target.value})
        }
    
    function handleSubmit(e){
        e.preventDefault()
                
        fetch(`/contacts`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(createContact)
            })
            .then(res => res.json())
            .then(user=>{
                console.log(createContact)
                fetchContacts()
                toast("Created New Contact")
                    }) 
                }

    return(
        <main>
            <div id="contactCreate">
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>
                <h2>First Name</h2>
                <input onChange ={handleContactInfo} name="firstname"/>
                <h2>Last Name</h2>
                <input  onChange ={handleContactInfo} name="lastname"/>
                <h2>Phone Number</h2>
                <input  onChange ={handleContactInfo} name="phone_number"/>
                <h2>Address</h2>
                <input  onChange ={handleContactInfo} name="address"/>
                <h2>Description</h2>
                <input  onChange ={handleContactInfo} name="description"/>
                <h2>Image</h2>
                <input  onChange ={handleContactInfo} name="photo"/>
                <button type="submit">Submit</button>
            </form>
            <NavLink exact to="./contacts">Contacts</NavLink>
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

export default CreateContact