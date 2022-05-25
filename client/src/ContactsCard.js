import React from "react";
import {useHistory} from 'react-router-dom';

function ContactsCard({items, setDisplayCard, fetchContacts, fetchFavorites, deleteMode}){

    let history = useHistory()
    function handleClick(){
        setDisplayCard(items)
        history.push("/Display")
    }

    function handleDelete(){
        fetch(`/contacts/${items.id}`, {
            method: 'DELETE'
                })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            fetchContacts()
            fetchFavorites()
        })
    }

    return(
        <li>
            <h1 onClick={handleClick}>{`${items.firstname} ${items.lastname}`}</h1>
            {deleteMode ? (
                <button onClick={handleDelete}>Delete</button>
            ) : (
                <div></div>
            )}
        </li>
    )

}

export default ContactsCard