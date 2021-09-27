import React from 'react';
import './Button.css';

export const Button = (props) => {
  const handleClick = () => {
    props.flipCoin();
  };
  return (
    <>
      <button onClick={handleClick}>Flip Me{'!'.repeat(3)}</button>
    </>
  );
};
