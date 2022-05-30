import React  from "react"
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function ContactDisplay({displayCard, fetchFavorites}){

    function handleFavorite(){
       fetch(`/contacts/${displayCard.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
            favorite: true,
                }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
            .then((response) => response.json())
            .then((json) => {console.log(json)
                fetchFavorites()
                toast("Added to Favorites")
    })}


    return(
        <main>
            <div id="largeDisplay">
                <div className="largeDisplayChild" id="buttonDiv">  
                    <NavLink id="contactsButton" exact to="/contacts">Contacts</NavLink>
                    <button id="favoriteButton" onClick={handleFavorite}>Favorite</button>
                </div>  
                <div className="largeDisplayChild" id="infoDiv"> 
                    <h1> First Name: {displayCard.firstname}</h1>
                    <h1> Last Name: {displayCard.lastname}</h1>
                    <h1> Phone Number: {displayCard.phone_number} </h1>
                    <h1> Address: {displayCard.address}</h1>
                    <h1> {displayCard.description} </h1>
                    <img src={displayCard.photo} style={{width: 300 ,height: 300}}
                    alt="Contact"/>
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
            </div>
        </main>
    )

}

export default ContactDisplay