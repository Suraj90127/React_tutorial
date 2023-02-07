import React,{useState} from "react"


const Event = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('click me');
    const bgChange = () => {
        let newBg = "#34495e"
        setBg(newBg)
        setName('Ouchh')
    };
    
    return(
        <>
        <div style={{ backgroundColor: bg}}>
             <button onMouseOver={bgChange}> {name} </button>
        </div>
        </>
    )
}

export default Event;