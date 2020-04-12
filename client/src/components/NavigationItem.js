import React from "react";

const NavigationItem = props => {
  return (
    <li className="navigation-item">
      <a href="#top" className="navigation-item__link">
        {props.text}
      </a>
    </li>
  );
};

export default NavigationItem;
