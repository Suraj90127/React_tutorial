import React, {useState} from "react"

const Form2 = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [fullname, setFullname] = useState('');
    const [lname, setlname] = useState('')


    
    const inputEvent = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }
    const inputEvent2 = (event) => {
        // console.log(event.target.value)
        setLastname(event.target.value)
    }
    const Submit = (event) => {

        event.preventDefault();   // this method through not refresh 

        setFullname(name)
        setlname(lastname)
    }
    return(
<>
<form onSubmit={Submit}>
    <div>
        <h1> Hello {fullname} {lname}</h1>
        <input type="text" placeholder="Entet your frist name" onChange={inputEvent} value={name}/>
    <br/>
        <input type="text" placeholder="Entet your Last name" onChange={inputEvent2} value={lastname}/>
        <button> Submit</button>
    </div>
</form>
</>
    )
}

export default Form2;