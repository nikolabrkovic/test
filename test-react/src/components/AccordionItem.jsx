import React, { useState } from 'react';
import styles from "../styling/accordion.css";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <style>{styles}</style>
    <div className="accordion-item" part="accordion-item">
      <div className="accordion-title" part="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-item-title" part="accordion-item-title"><slot name={"acc-item-title"}></slot></div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content"><slot name={"acc-item-content"}></slot></div>}
    </div>
    </>
  );
};

export default Accordion;