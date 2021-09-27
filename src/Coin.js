import React from 'react';
import './Coin.css';

export const Coin = (props) => {
  const coinFace = props.coinFace;
  const styles = {
    coinImg: {
      width: 200,
      height: 200,
      marginLeft: '40%',
      marginTop: 50,
    },
  };
  return (
    <>
      <img src={coinFace} alt={coinFace} id="coinFace" />
    </>
  );
};
