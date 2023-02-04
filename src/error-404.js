import React from "react";


function error404() {
    return (
        <React.StrictMode>
            <h1>404 error, webpage not found!</h1>
            <p>please visit <a href="/">home</a></p>
        </React.StrictMode>
    )
}

export default error404;