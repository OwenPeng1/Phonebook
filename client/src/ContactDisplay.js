import React  from "react"
import {NavLink} from 'react-router-dom'

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
    })}

    return(
        <main>
            <div>
                <h1> First Name: {displayCard.firstname}</h1>
                <h1> Last Name: {displayCard.lastname}</h1>
                <h1> Phone Number: {displayCard.phone_number} </h1>
                <h1> Address: {displayCard.address}</h1>
                <h1> {displayCard.description} </h1>
                <NavLink exact to="/contacts">Contacts</NavLink>
                <img src={displayCard.photo} style={{width: 300 ,height: 300}}
                alt="Contact"/>
                <button onClick={handleFavorite}>Favorite</button>
            </div>
        </main>
    )

}

export default ContactDisplay