import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthorisedThunk,
  setPasswordThunk,
  setUsernameThunk,
} from "../redux/actions/loginActions";
import loginApi from "../api/loginApi";

function Login() {
  const dispatch = useDispatch();
  const authorised = useSelector((state) => state.login.loginAuthorised);
  const username = useSelector((state) => state.login.loginUsername);
  const password = useSelector((state) => state.login.loginPassword);
  const [redirect, setRedirect] = useState(false);

  const click = (event) => {
    event.preventDefault();
    loginApi.login(username, password).then((res) => {
      if (res.data.auth) {
        localStorage.setItem("auth", true);
        dispatch(setAuthorisedThunk(true));
      } else {
        localStorage.setItem("auth", false);
      }
    });
  };

  if (authorised) {
    return <Redirect to="./Projects" />;
  }
  const signUpRedirect = (event) => {
    event.preventDefault();
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="./SignUp" />;
  }
  return (
    <section className="login">
      <div className="green-blur"></div>
      <form id="login-form">
        <label className="login-form__label">Username</label>
        <input
          id="username"
          onChange={(event) => dispatch(setUsernameThunk(event.target.value))}
        ></input>
        <label className="login-form__label">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => dispatch(setPasswordThunk(event.target.value))}
        ></input>
        <div className="auth-buttons">
          <button id="login-submit" onClick={click}>
            Log In
          </button>
          <button
            id="sign-up-redirect"
            onClick={(event) => {
              signUpRedirect(event);
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
