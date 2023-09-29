import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase"; // This is the Firebase authentication object.

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // The following two functions prevent reloading of the page when the user clicks on the Sign In button or the Sign up now link.
    function register(e) {
        e.preventDefault();

        // The following code will create a new user in the Firebase database.
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    }
  return (
    <div className="signupScreen">
        <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit" onClick={signIn}>Sign In</button>

            <h4>
                <span className="signupScreen__gray">New to Netflix? </span>
                <span className="signupScreen__link" onClick={register}>Sign up now.</span>
            </h4>
        </form>
    </div>
  );
}

export default SignUpScreen;