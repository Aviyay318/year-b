import React from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
    return (
        <div>
            <nav className={"navbar"}>
                <NavLink to={"/"}  activeClassName={"active"} >Homepage</NavLink>
                <NavLink to={"/login"} activeClassName={"active"}>Login</NavLink>
                <NavLink to={"/register"} activeClassName={"active"}>Register</NavLink>
                <NavLink to={"/image"} activeClassName={"active"}>Image</NavLink>
                <NavLink to={"/todo"} activeClassName={"active"}>TodoList</NavLink>
                <NavLink to={"/math"} activeClassName={"active"}>Math</NavLink>
            </nav>
        </div>
    )
}
export default Navbar;