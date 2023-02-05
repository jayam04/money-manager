import React from "react";
import { UilGithubAlt } from "@iconscout/react-unicons";
import "./Footer.sass";

import PaypalDonationButton from "../../components/buttons/PaypalDonation";

function Footer() {
  return (
    <div className="footer">
      {/* reachus */}
      <div className="reachus">
        <a href="https://github.com/jayam04/monymngr-web">
          <UilGithubAlt size="20" />
        </a>
      </div>

      {/* attributes */}
      <div className="attributes">
        <h4>attributes</h4>
        <div className="attributes">
          <p>
            <a
              href="https://www.flaticon.com/free-icon/money-management_9165762?term=money+manager&page=1&position=63&origin=search&related_id=9165762"
              title="logo"
            >
              logo
            </a>{" "}
            by <a href="https://www.flaticon.com/authors/nawicon">nawicon </a>in{" "}
            <a href="https://www.flaticon.com/">flaticon</a>
          </p>
        </div>
      </div>

      {/* about us */}
      <a href="/about" className="reach_us">about us</a>

      <br></br>

      <PaypalDonationButton />
    </div>
  );
}

export default Footer;