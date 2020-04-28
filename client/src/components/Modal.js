import React from "react";
import { Redirect } from "react-router-dom";

function Modal() {
  const redirirect = () => {
    return <Redirect to="./SignUp" />;
  };

  return (
    <div className="modal">
      <h3>You are not log in!</h3>
      <button onClick={redirirect()}>Log in</button>
    </div>
  );
}

export default Modal;
