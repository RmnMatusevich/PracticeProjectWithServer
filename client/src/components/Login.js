import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthorisedThunk,
  setPasswordThunk,
  setUsernameThunk,
} from "./redux/actions/loginActions";

function Login() {
  const dispatch = useDispatch();
  const authorised = useSelector((state) => state.login.loginAuthorised);
  const username = useSelector((state) => state.login.loginUsername);
  const password = useSelector((state) => state.login.loginPassword);

  const click = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "1234") {
      dispatch(setAuthorisedThunk(true));
    }
  };
  if (authorised) {
    return <Redirect to="./Projects" />;
  } else {
  }

  return (
    <section className="login" onSubmit={click}>
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
        <button id="login-submit">Log In</button>
      </form>
    </section>
  );
}

export default Login;
