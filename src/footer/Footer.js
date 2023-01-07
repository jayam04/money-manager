import React from "react";
import Credits from './Credits.js'
import './sass/Footer.sass'

function Footer() {
    return (
        <div className="main">
            <p>Credits</p>
            {Credits()}
            <p>Reach us</p>
        </div>
    )
}

export default Footer