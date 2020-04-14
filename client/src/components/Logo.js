import React from "react";

function Logo() {
  return (
    <div className="logo">
      <img
        className="logo-image"
        src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg"
        alt="Logo"
      />
      <div className="logo-text">
        <small>by</small> Pivotal
      </div>
    </div>
  );
}
export default Logo;
