import React, { useState } from 'react';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-item-title"><slot name={"acc-item-title"}></slot></div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content"><slot name={"acc-item-content"}></slot></div>}
    </div>
  );
};

export default Accordion;