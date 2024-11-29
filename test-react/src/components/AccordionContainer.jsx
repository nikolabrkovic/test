import React from 'react';
import Accordion from './AccordionItem';

const AccordionContainer = (props) => {
  return (
    <div>
      <h1>{props.mainTitle}</h1>
      <div className="accordion" part="accordion">
        <Accordion/>
      </div>
    </div>
  );
};

export default AccordionContainer;