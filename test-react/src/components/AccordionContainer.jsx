import React from 'react';
import Accordion from './AccordionItem';

const AccordionContainer = ({mainTitle}) => {
  return (
    <div>
      <h1>{mainTitle}</h1>
      <div className="accordion">
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default AccordionContainer;