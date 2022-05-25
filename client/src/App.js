import './App.css';
import React, { useState, useEffect }from "react"
import {Switch, Route} from 'react-router-dom'
import Login from "./Login"
import CreateUser from "./CreateUser"
import Contacts from "./Contacts"
import ContactDisplay from "./ContactDisplay"
import CreateContact from "./CreateContact"
import Favorite from "./Favorite"

function App() {

const [user, setUser] = useState({username:"", password:""})
const [currentUser, setCurrentUser] = useState(null)
const [contacts, setContacts] = useState([])
const [displayCard, setDisplayCard] = useState({})
const [favorite, setFavorite]= useState([])

  function fetchContacts(){
    fetch("/contacts")
      .then(r => r.json())
      .then(setContacts)
  }
  
  function fetchFavorites(){
    fetch("/favorite")
      .then(r => r.json())
      .then(setFavorite)
  }


  useEffect(
    () => {
      fetch("/userInSession")
      .then(r => r.json())
      .then(data => {console.log(data)
      setCurrentUser(data)});

      fetchContacts()

      fetchFavorites()

    }, []
  )

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Login setUser={setUser} setCurrentUser={setCurrentUser} user={user}/>
        </Route>
        <Route exact path= "/user">
          <CreateUser/>
        </Route>
        <Route exact path= "/contacts">
          <Contacts contacts={contacts} currentUser={currentUser}setDisplayCard={setDisplayCard} fetchContacts={fetchContacts} fetchFavorites={fetchFavorites}/>
        </Route>
        <Route exact path="/display">
          <ContactDisplay displayCard={displayCard} fetchFavorites={fetchFavorites}/>
        </Route>
        <Route exact path="/create">
          <CreateContact fetchContacts={fetchContacts} currentUser={currentUser}/>
        </Route>
        <Route exact path="/favorite">
          <Favorite favorite={favorite} setDisplayCard={setDisplayCard}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
