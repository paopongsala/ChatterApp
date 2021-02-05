import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message.js'
import NamePicker from './NamePicker.js'

function App() {
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')

  return <div className="App">
    <header className="header">
      <div className="logo" />
      Chatter
      <NamePicker saveName={name=> setUsername(name)} />
    </header>
    <main className="messages">

    {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}

    </main>

    <TextInput 
      send={(t)=> setMessages(
        [{text:t, username:username},...messages])
      }
    />
  </div>
}
export default App;