import React from "react";

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-image"
        src="https://spring.io/images/spring-logo-fc4350c59999bb62c468361537212419.svg"
        alt="Logo"
      />
      <div className="logo-text">
        <small>by</small> Pivotal
      </div>
    </div>
  );
}
export default Logo;
