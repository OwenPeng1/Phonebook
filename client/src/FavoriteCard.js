import React from "react";
import {useHistory} from 'react-router-dom';

function FavoriteCard({items, setDisplayCard}){

    let history = useHistory()
    function handleClick(){
        setDisplayCard(items)
        history.push("/Display")}

    return(
        <li id="favoriteCard" onClick={handleClick}>
            <h1>{`${items.firstname} ${items.lastname}`}</h1>
            <img src={items.photo} style={{width: 300 ,height: 300}}
                alt="Contact"/>
        </li>
    )

}

export default FavoriteCard