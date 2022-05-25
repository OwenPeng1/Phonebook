import React from "react";
import ContactsCard from "./ContactsCard"

function Header({items,setDisplayCard, fetchContacts, fetchFavorites, deleteMode}){

    return(
        <li>
            <h4 id="header">{items.firstname[0]}</h4>
            <ContactsCard items= {items} setDisplayCard={setDisplayCard} fetchContacts={fetchContacts} fetchFavorites={fetchFavorites} deleteMode={deleteMode}/>
        </li>
        
    )

}

export default Header