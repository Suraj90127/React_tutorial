import React, {useState, useEffect} from "react";


const Useeffect = () => {
    const [num, setNum] = useState(0)

    // useEffectr ek esa function hai jo ke har reload condition maens har effected hone pr pr chalta hai 



    useEffect(()=>{
        console.log("Clicked me");
        document.title = `you are clicked ${num} times`  // this syntex title change
        // alert("i am clicked ")
    })

    return(
        <>
            <button onClick={() => {
                setNum(num+1)
            }}> click me {num}</button>
        </>
    )
}

export default Useeffect;