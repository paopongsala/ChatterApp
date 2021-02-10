import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message.js'
import NamePicker from './NamePicker.js'
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}


function App(props) {
  console.log(props)
  const room = props.match.params.room || 'home'
  console.log("CHAT ROOM", room)

  const messages = useDB(room)
  const [username, setUsername] = useState(
    localStorage.getItem('username') || 'Set username:')

  return <div className="App">
    <header className="header">
      <div className="logo" />
      Chatter
      <NamePicker saveName={name=> setUsername(name)} />
    </header>
    <main className="messages">

    {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe} />
      })}

    </main>

    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
    />
  </div>
}
export default Wrap;