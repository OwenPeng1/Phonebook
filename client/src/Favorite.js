import React from "react";
import {NavLink} from 'react-router-dom';
import FavoriteCard from "./FavoriteCard"

function Favorite({favorite, setDisplayCard}){

    return(
        <main>
            <h1>Favorites</h1>
            <ul id="favoriteList">
                {favorite.map(items => (
                    <FavoriteCard items= {items} setDisplayCard={setDisplayCard} />
                ))}
            </ul>
            <NavLink id="favoriteContacts" exact to= "/contacts">Contacts</NavLink>
        </main>
    )

}

export default Favorite