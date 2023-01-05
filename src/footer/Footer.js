import React from "react";
import { ReactDOM } from "react";
import Credits from './Credits.js'

function Footer() {
    return (
        <div className="main">
            {Credits()}
        </div>
    )
}

export default Footer