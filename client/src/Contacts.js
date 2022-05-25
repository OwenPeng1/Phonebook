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
            <NavLink exact to= "/create">Create Contact</NavLink>
            <NavLink exact to= "/favorite">Favorite</NavLink>
            <button onClick = {toggleDelete}>Edit</button>
        </main>
    )

}

export default Contacts