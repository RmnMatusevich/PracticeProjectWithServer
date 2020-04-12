import React from "react";

const CollageItem = props => {
  return (
    <div className="collage-item">
      <img className="collage-image" src={props.src} alt="Collage icon" />
      <h6 className="collage-tittle">{props.tittle}</h6>
      <p className="collage-description">{props.description}</p>
    </div>
  );
};

export default CollageItem;
