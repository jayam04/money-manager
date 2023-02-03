import React from 'react';
import './Account.sass';

const Account = ({ icon, currency, amount, account, color }) => {

    console.log(icon)

    function getCurrency(currency) {

      let listOfCurrency = {
        "USD": "$",
        "EUR": "€",
        "INR": "₹",
        "CAD": "C$",
        "KYD": "CI$",
        "AUD": "AU$"
      }

      if (currency in listOfCurrency) return listOfCurrency[currency];

      return currency;
    }

  return (
    <div className="account" style={{backgroundColor: color["bg"]}}>
      <img src={icon} alt="account-icon" />
      <div className="account-details">
        <div className="account-type" style={{color: color["accName"]}}>{account}</div>
        <div className="account-balance" style={{color: color["cash"]}}>

          {getCurrency(currency)} {amount}
        </div>
      </div>
    </div>
  );
};

export default Account;
