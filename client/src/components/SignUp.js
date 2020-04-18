import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUsernameThunk,
  setPasswordThunk,
  setPasswordRepeatThunk,
  setFirstNameThunk,
  setLastNameThunk,
  setAgeThunk,
} from "../redux/actions/signUpActions";
function SignUp() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.signUp.signUpUsername);
  const password = useSelector((state) => state.signUp.signUpPassword);
  const passwordRepeat = useSelector(
    (state) => state.signUp.signUpPasswordRepeat
  );
  const firstName = useSelector((state) => state.signUp.signUpFirstName);
  const lastName = useSelector((state) => state.signUp.signUpLastName);
  const redirect = useSelector((state) => state.signUp.signUpAge);

  return (
    <section className="sign-up">
      <div className="green-blur" id="green-blur__sign-up"></div>
      <form id="sign-up-form">
        <label className="sign-up-form__label">Username</label>
        <input
          id="sign-up-form__username"
          onChange={(event) => dispatch(setUsernameThunk(event.target.value))}
        ></input>
        <label className="sign-up-form__label">Password</label>
        <input
          id="sign-up-form__password"
          type="password"
          onChange={(event) => dispatch(setPasswordThunk(event.target.value))}
        ></input>
        <label className="sign-up-form__label">Repeat password</label>
        <input
          id="sign-up-form__password-repeat"
          type="password"
          onChange={(event) =>
            dispatch(setPasswordRepeatThunk(event.target.value))
          }
        ></input>
        <label className="sign-up-form__label">First Name</label>
        <input
          id="sign-up-form__firstName"
          onChange={(event) => dispatch(setFirstNameThunk(event.target.value))}
        ></input>
        <label className="sign-up-form__label">Last Name</label>
        <input
          id="sign-up-form__lastName"
          onChange={(event) => dispatch(setLastNameThunk(event.target.value))}
        ></input>
        <label className="sign-up-form__label">Age</label>
        <input
          id="sign-up-form__age"
          onChange={(event) => dispatch(setAgeThunk(event.target.value))}
        ></input>
        <button id="sign-up-submit">Sign Up</button>
      </form>
    </section>
  );
}

export default SignUp;
