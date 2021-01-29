import {useState} from 'react'
function TextInput(props) {
  const [text, setText] = useState('')

  function sendMessage(){
    if(text==='') return  
    props.send(text)
    setText('')
  }

  function keyPressed(e){
      if(e.key==='Enter'){
          sendMessage()
      }
  }

  return <footer className="text-input">
      <input className="textbox"
      placeholder="Write your message"
      value={text}
      onChange={e=> setText(e.target.value)}
      onKeyPress={keyPressed}
    />
    <button className="send-button" onClick={sendMessage}>➤</button>
  </footer>
}

export default TextInput