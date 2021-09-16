import React from "react"
import logo from "../images/logo.svg"
import "../css/navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar_data">
                <div className="navbar_data_grid">Features</div>
                <div className="navbar_data_grid">Solution</div>
                <div className="navbar_data_grid">Pricing</div>
                <div className="navbar_data_grid">blog</div>
            </div>
            <div className="navbar_button">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup"> <button className="navbar_button_signup">Sign up</button></NavLink>
            </div>

        </div>
    )
}

export default Navbar
