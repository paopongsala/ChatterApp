

function Message(props){


    return <div className="message-row">
    <div className="my-name-header">{props.username}</div>
    <div className="message">
      {props.text}
    </div>
  </div>
}
export default Message