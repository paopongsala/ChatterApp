import {useState} from 'react'

function NamePicker(props){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(
        localStorage.getItem('username') || 'Set username:')

    function keyPressed(e){
        if(e.key==='Enter'){
            setShowInput()
            props.saveName(username)
            localStorage.setItem('username',username)
        }
    }


    if (showInput) {
        return <div className="name-picker">
            <input className="name-picker-box" value={username}
                onChange={e=> setUsername(e.target.value)}
                onKeyPress={keyPressed}
            />
            <button className="name-ok-button" onClick={()=> {
            props.saveName(username);
            setShowInput(false);
            localStorage.setItem('username',username)
        }}>
                OK
            </button>
        </div>
    }

    return <div className="name-picker">
        <div className="my-name">{username}</div>
        <button className="name-edit-button" onClick={()=> 
            setShowInput(true)
        }>
        ✎
        </button>
    </div>
}

export default NamePicker