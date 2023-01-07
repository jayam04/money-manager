import React from "react";
import './sass/Credits.sass';
import { Button } from "@chakra-ui/button";


function Credits() {
    return (
        <React.StrictMode>
        <Button>heelo</Button>
        <div className="credits">
            <p>
                <a href="https://www.flaticon.com/free-icon/money-management_9165762?term=money+manager&page=1&position=63&origin=search&related_id=9165762" title="logo">logo</a> by <a href="https://www.flaticon.com/authors/nawicon">nawicon </a>in <a href="https://www.flaticon.com/">flaticon</a>
            </p>
        </div>
        </React.StrictMode>
    )
}

export default Credits