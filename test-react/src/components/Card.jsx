import React from 'react';
import "../styling/card.css";

const SimpleCard = () => {

  return (
    <>
      <div className="first hero">
        <div className="hero-profile-img">
          <slot name={"banner"}></slot>
        </div>
        <div className="hero-description">
          <slot name={"description"}></slot>
        </div>
        <div className="hero-btn">
          <slot name={"link"}></slot>
        </div>
      </div>
    </>

  );
};

export default SimpleCard;