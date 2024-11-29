import React from 'react';

const SimpleB = ({title, subtitle}) => {
  return (
    <>
        <h1 part="simple-title">{title}</h1>
        <span part="simple-span">{subtitle}</span>
    </>
  );
};

export default SimpleB;
