import { useState } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Form from "../form/form.component";
import Button from "../button/button.component";
import { Link } from "react-router-dom";
import "./Authentication.scss";

const Authentication = () => {
  const [displayUser, setDisplayUser] = useState(null);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userName = user.displayName.split(" ")[0];
    setDisplayUser(userName);
  };

  return (
    <div className="container">
      <div className="container__form">
        <div className="container__greet">
          <h2 className="container__greet__title">
            {!displayUser
              ? "Continue to Login"
              : `Welcome back, ${displayUser}`}
          </h2>
          <p className="container__greet__info">
            Contine With Google or enter your details.
          </p>
        </div>
        <div className="direct">
          <Button
            buttonType="google"
            text="Log in with Google"
            onClick={signInWithGoogle}
          />
        </div>
        <Form />
        <div className="quation">
          <p className="quation__info">Don't have an account?</p>
          <Link className="quation__link" to="/sign-up">
            Sign up for free
          </Link>
        </div>
      </div>
      <div className="img"></div>
    </div>
  );
};

export default Authentication;
