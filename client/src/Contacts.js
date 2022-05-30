import React, {useState} from "react"
import ContactsCard from "./ContactsCard"
import {NavLink} from 'react-router-dom'
import Header from "./Header"

function Contacts({contacts,currentUser, setDisplayCard, fetchContacts, fetchFavorites}){
const [deleteMode, setDeleteMode] = useState(false)
    
    function toggleDelete(){
        setDeleteMode(!deleteMode)
    }

    const letterList=[]

    return(
        <main>
            <h1>Hello {currentUser.name}</h1>
            <div id="contacts">
            <ul>
                {contacts.map(items => {
                    if (letterList.includes(items.firstname[0])){
                    return(
                    <ContactsCard items= {items} setDisplayCard={setDisplayCard} fetchContacts={fetchContacts} fetchFavorites={fetchFavorites} deleteMode={deleteMode}/>
                    )}
                    else {
                        return(
                        letterList.push(items.firstname[0]),
                        <Header items={items} setDisplayCard={setDisplayCard} fetchContacts={fetchContacts} fetchFavorites={fetchFavorites} deleteMode={deleteMode}/>
                        )}
                })}
            </ul>
            </div>
            <NavLink className="contactButtons" id="createContact"exact to= "/create">Create</NavLink>
            <NavLink className="contactButtons" id="directFavorite" exact to= "/favorite">Favorites</NavLink>
            <button className="contactButtons" id="deleteButton" onClick = {toggleDelete}>Delete</button>
        </main>
    )

}

export default Contacts