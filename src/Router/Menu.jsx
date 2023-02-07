import React from "react"
import {Link,NavLink} from "react-router-dom"

const Menu = () => {
    const css={
        color: 'blue',
        borderBottom: '1px solid red',
    }
    return (
        <div className="menu_class">
            <NavLink  activeClassName="active_class" to="/">About me </NavLink>
            <NavLink  activeClassName="active_clas" to="/co">Contact me </NavLink>
            <NavLink  activeClassName="active_clas" to="/pa/:name/suraj">User </NavLink>
            <NavLink  activeClassName="active_clas" to="/search">Search </NavLink>


                {/* <br/>
            <Link style={css} to="/">About me </Link>
            <Link style={css}to="/co">Contact me </Link> */}
        
        </div>
    )

}

export default Menu;