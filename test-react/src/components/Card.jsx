import React from 'react';
import styles from "../styling/card.css";

const SimpleCard = () => {

  return (
      <>
        <style>{styles}</style>
        <div className="first hero">
            <div className="hero-profile-img">
                <slot name={"banner"}></slot>
           </div>
             <div className="hero-description-bk"></div>
             <div className="hero-logo">
                 <slot name={"logo"}></slot>
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