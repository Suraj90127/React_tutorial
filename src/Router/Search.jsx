import React, {useState} from "react";
import Searchresult from "./Searchresult"

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value
        setImg(data)
    }
    return(
        <div className="searchbar">
             <input type="text" placeholder="Seach image" value={img} onChange={inputEvent} />
             {img === "" ? null : <Searchresult name={img}/>}
        </div>
        
    );
}

export default Search;