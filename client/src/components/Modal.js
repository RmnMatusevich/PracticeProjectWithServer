import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Modal() {
  const [red, setRed] = useState(false);

  if (red) {
    return <Redirect to="./" />;
  }

  const redirectClick = () => {
    setRed(!red);
  };

  return (
    <div className="modal">
      <h3 className="modal-alert">You are not log in!</h3>
      <button className="modal-button" onClick={redirectClick}>
        Log in
      </button>
    </div>
  );
}

export default Modal;
