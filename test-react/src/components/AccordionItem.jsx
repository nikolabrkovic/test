import React, { useState } from 'react';
import "../styling/accordion.css";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <style>
        {`
.accordion-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 5px #0000001a
}

.accordion-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7f7f7;
    padding: 10px 15px;
    cursor: pointer;
    font-weight: 700;
    transition: background-color .3s ease
}

.accordion-title:hover {
    background-color: #e0e0e0
}

.accordion-item-title {
    font-size: 16px;
    color: #333
}

.accordion-content {
    padding: 15px;
    background-color: #f4f4f4;
    color: #555;
    border-top: 1px solid #ccc;
    font-size: 14px;
    transition: max-height .3s ease, padding .3s ease;
    overflow: hidden
}

.accordion-item.active .accordion-content {
    display: block;
    max-height: 500px;
    padding: 15px
}

.accordion-title div {
    font-size: 20px;
    color: #777
}

.accordion-title div {
    transition: transform .3s ease
}

.accordion-item.active .accordion-title div {
    transform: rotate(45deg)
}
      `}
      </style>
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