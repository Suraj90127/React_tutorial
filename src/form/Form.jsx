import React, {useState} from "react"

const Form = () => {
    const [name, setName] = useState();0
    const [fullname, setFullname] = useState('Hello');

    const Submit = () => {
        setFullname(name)
    }

    const inputEvent = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    return(
<>
    <div>
        <h1> {fullname}</h1>
        <input type="text" placeholder="Entet your name" onChange={inputEvent} value={name}/>
        <button onClick={Submit}> Submit</button>
    </div>
</>
    )
}

export default Form;