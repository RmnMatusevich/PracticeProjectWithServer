import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  setUsernameThunk,
  setPasswordThunk,
  setPasswordRepeatThunk,
  setFirstNameThunk,
  setLastNameThunk,
  setAgeThunk,
  setRedirectThunk,
} from "../redux/actions/signUpActions";
import axios from "axios";

function SignUp() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.signUp.signUpUsername);
  const password = useSelector((state) => state.signUp.signUpPassword);
  const firstName = useSelector((state) => state.signUp.signUpFirstName);
  const lastName = useSelector((state) => state.signUp.signUpLastName);
  const age = useSelector((state) => state.signUp.signUpAge);
  const redirect = useSelector((state) => state.signUp.signUpRedirect);

  const singUpClick = () => {
    let i = Math.floor(Math.random() * 10000);
    axios
      .post("/signup", { i, username, password, firstName, lastName, age })
      .then((res) => {
        if (res.data.reg) {
          dispatch(setRedirectThunk(true));
          return <Redirect to="./Projects" />;
        }
      });
  };

  if (redirect) {
    return <Redirect to="./Projects" />;
  }

  return (
    <section className="sign-up">
      <div className="green-blur" id="green-blur__sign-up"></div>
      <form id="sign-up-form" onSubmit={singUpClick}>
        <label className="sign-up-form__label">Username</label>
        <input
          id="sign-up-form__username"
          minLength="3"
          onChange={(event) => dispatch(setUsernameThunk(event.target.value))}
          required
        ></input>
        <label className="sign-up-form__label">Password</label>
        <input
          id="sign-up-form__password"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?!.*\s).*$"
          title="Введите как минимум 1 цифру и 1 букву."
          onChange={(event) => dispatch(setPasswordThunk(event.target.value))}
          required
        ></input>
        <label className="sign-up-form__label">Repeat password</label>
        <input
          id="sign-up-form__password-repeat"
          type="password"
          pattern={password}
          tittle="Пароли не совпадают."
          onChange={(event) =>
            dispatch(setPasswordRepeatThunk(event.target.value))
          }
          required
        ></input>
        <label className="sign-up-form__label">First Name</label>
        <input
          id="sign-up-form__firstName"
          minLength="3"
          onChange={(event) => dispatch(setFirstNameThunk(event.target.value))}
          required
        ></input>
        <label className="sign-up-form__label">Last Name</label>
        <input
          id="sign-up-form__lastName"
          minLength="3"
          onChange={(event) => dispatch(setLastNameThunk(event.target.value))}
          required
        ></input>
        <label className="sign-up-form__label">Age</label>
        <input
          id="sign-up-form__age"
          type="number"
          min="1"
          onChange={(event) => dispatch(setAgeThunk(event.target.value))}
          required
        ></input>
        <button id="sign-up-submit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignUp;
