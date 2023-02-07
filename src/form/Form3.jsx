import React, {useState} from "react"

const Form3 = () => {
    const [fullname, setFullName] = useState({
        fname : '',
        lname : '',
        email : '',
    });
   

    
    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target;

        setFullName((preValue) => {
            if (name === 'fname') {
                return{
                    fname: value,
                    lname : preValue.lname,
                    email : preValue.email
                }
            }else if (name === 'lname') {
                    return{
                        fname: preValue.fname,
                        lname : value,
                        email : preValue.email
                    }
            }else if (name === 'email') {
                return{
                    fname: preValue.fname,
                    lname : preValue.lname,
                    email : value
                }
        }
        })

    }
    const Submit = (event) => {
        event.preventDefault();   // this method through not refresh 
    }
    return(
<>
<form onSubmit={Submit}>
    <div>
        <h1> Hello {fullname.fname} {fullname.lname} </h1>
        <p>{fullname.email}</p>
        <input type="text"
         placeholder="Entet your frist name" 
        name='fname' 
        onChange={inputEvent}
         value={fullname.fname}

         />
    <br/>
        <input type="text" 
        placeholder="Entet your Last name" 
        name='lname' onChange={inputEvent} 
        value={fullname.lname}

        />
        <br/>
        <input type="email" 
        placeholder="Entet your Email" 
        name='email' onChange={inputEvent} 
        value={fullname.email}
        autoComplete="off"

        />
        <button> Submit</button>
    </div>
</form>
</>
    )
}

export default Form3;