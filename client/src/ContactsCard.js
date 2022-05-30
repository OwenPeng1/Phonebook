import React from "react";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
            toast(`Deleted ${items.firstname} ${items.lastname}`)
        })
    }

    return(
        <li className="contactCard">
            {deleteMode ? (
                <button className="contactCardChild" id="contactDelete"onClick={handleDelete}>Delete</button>
            ) : (
                <div></div>
            )}
            <h1 className="contactCardChild" id="contactName" onClick={handleClick}>{`${items.firstname} ${items.lastname}`}</h1>
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

        </li>
    )

}

export default ContactsCard