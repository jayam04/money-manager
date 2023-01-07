import React from "react";
import { UilGithubAlt } from '@iconscout/react-unicons'
import './footer.sass';

function Footer() {
    return (
        <div className="main">
            {/* credits */}
            <div className="credits">
                <h4>Credits</h4>
                    <div className="credits">
                        <p>
                            <a href="https://www.flaticon.com/free-icon/money-management_9165762?term=money+manager&page=1&position=63&origin=search&related_id=9165762" title="logo">logo</a> by <a href="https://www.flaticon.com/authors/nawicon">nawicon </a>in <a href="https://www.flaticon.com/">flaticon</a>
                        </p>
                    </div>
            </div>

            {/* reachus */}
            <div className="reachus">
                <h4>Reach us</h4>
                <a href="https://github.com/jayam04/monymngr">
                    <UilGithubAlt size='20' />
                </a>
            </div>

        </div>
    )
}

export default Footer